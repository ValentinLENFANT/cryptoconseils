<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 28/06/2018
 * Time: 11:17
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Entity\Order;
use CryptoConseils\UserBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use JMS\Payment\CoreBundle\Form\ChoosePaymentMethodType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use JMS\Payment\CoreBundle\PluginController\Result;
use JMS\Payment\CoreBundle\Plugin\Exception\ActionRequiredException;
use JMS\Payment\CoreBundle\Plugin\Exception\Action\VisitUrl;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use \PDO;

/**
 * Class OrdersController
 * @package CryptoConseils\BlogBundle\Controller
 * @Route("/orders")
 */
class OrdersController extends Controller
{
    /**
     * @Route("/new/{amount}")
     */
    public function newAction($amount)
    {
        $user = $this->getUser();
        $em = $this->getDoctrine()->getManager();

        $order = new Order($amount);
        $em->persist($order);
        $em->flush();

        return $this->redirect($this->generateUrl('cryptoconseils_blog_orders_show', [
            'id' => $order->getId(),
            'order' => $order->getId(),
            'amount' => $amount,
        ], UrlGeneratorInterface::ABSOLUTE_URL));
    }

    /**
     * @Route("/{id}/show")
     * @Template
     */
    public function showAction(Request $request, Order $order)
    {
        $config = [
            'paypal_express_checkout' => [
                'return_url' => $this->generateUrl('cryptoconseils_blog_orders_paymentcreate', [
                    'id' => $order->getId(),
                ], UrlGeneratorInterface::ABSOLUTE_URL),
                'cancel_url' => $this->generateUrl('cryptoconseils_blog_orders_paymentcancel', [
                    'id' => $order->getId(),
                ], UrlGeneratorInterface::ABSOLUTE_URL),
                'useraction' => 'commit',
                'paypal_payer_id' => 'ZZ6WH4W5EEBTW',
            ]
        ];

        $form = $this->createForm(ChoosePaymentMethodType::class, null, [
            'amount' => $order->getAmount(),
            'currency' => "EUR",
            'predefined_data' => $config,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $ppc = $this->get('payment.plugin_controller');
            $ppc->createPaymentInstruction($instruction = $form->getData());

            $order->setPaymentInstruction($instruction);

            $em = $this->getDoctrine()->getManager();
            $em->persist($order);
            $em->flush($order);

            return $this->redirect($this->generateUrl('cryptoconseils_blog_orders_paymentcreate', [
                'id' => $order->getId(),
            ]));
        }

        return $this->render(
            "CryptoConseilsBlogBundle:Orders:show.html.twig", array(
            'order' => $order,
            'form' => $form->createView(),
        ));
    }

    private function createPayment($order)
    {
        $instruction = $order->getPaymentInstruction();
        $pendingTransaction = $instruction->getPendingTransaction();

        if($pendingTransaction !== null) {
            return $pendingTransaction->getPayment();
        }

        $ppc = $this->get('payment.plugin_controller');
        $amount = $instruction->getAmount() - $instruction->getDepositedAmount();

        return $ppc->createPayment($instruction->getId(), $amount);
    }

    /**
     * @Route("/{id}/payment/create")
     */
    public function paymentCreateAction(Order $order)
    {
        $payment = $this->createPayment($order);

        $ppc = $this->get('payment.plugin_controller');
        $result = $ppc->approveAndDeposit($payment->getId(), $payment->getTargetAmount());

        if($result->getStatus() === Result::STATUS_PENDING) {
            $ex = $result->getPluginException();

            if ($ex instanceof ActionRequiredException) {
                $action = $ex->getAction();

                if ($action instanceof VisitUrl) {
                    return $this->redirect($action->getUrl());
                }
            }
        }
        return $this->redirect($this->generateUrl('cryptoconseils_blog_orders_paymentcomplete', [
            'id' => $order->getId(),
        ]));
    }

    /**
     * @Route("/{id}/payment/complete")
     */
    public function paymentCompleteAction(Order $order)
    {
        //TODO CHANGE THE USER ID TO GET IT DYNAMICALLY
        $userId = 1; //Changer le userId
        try {
            $bdd = new PDO('mysql:host='.$this->container->getParameter('database_host').';dbname='.$this->container->getParameter('database_name').';charset=utf8', $this->container->getParameter('database_user'), $this->container->getParameter('database_password'));
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        if (100 == $order->getAmount()){
            $req = $bdd->prepare('UPDATE users SET premiumLevel = :premiumLevel WHERE id = :id');
            $req->execute(array(
                'premiumLevel' => 2,
                'id' => $userId
            ));
        } else if (300 == $order->getAmount()) {
            $req = $bdd->prepare('UPDATE users SET premiumLevel = :premiumLevel WHERE id = :id');
            $req->execute(array(
                'premiumLevel' => 3,
                'id' => $userId
            ));
        } else if (500 == $order->getAmount()) {
            $req = $bdd->prepare('UPDATE users SET premiumLevel = :premiumLevel WHERE id = :id');
            $req->execute(array(
                'premiumLevel' => 4,
                'id' => $userId
            ));
        } else if (1000 == $order->getAmount()) {
            $req = $bdd->prepare('UPDATE users SET premiumLevel = :premiumLevel WHERE id = :id');
            $req->execute(array(
                'premiumLevel' => 5,
                'id' => $userId
            ));
        } else {
            echo "Error.";
        }
        echo "Cliquez <a href='localhost:3000' target='_blank'>ici</a> pour retourner à la page d'accueil. </br>";
        return new Response('Payment complete');
    }

    public function paymentCancelAction(Order $order)
    {
        return new Response('Payment cancel');
    }
}