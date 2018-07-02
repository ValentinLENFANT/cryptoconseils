<?php
/**
 * Created by PhpStorm.
 * User: KFMJ2601
 * Date: 28/06/2018
 * Time: 11:17
 */

namespace CryptoConseils\BlogBundle\Controller;

use CryptoConseils\BlogBundle\Entity\Order;
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

/**
 * Class OrdersController
 * @package CryptoConseils\BlogBundle\Controller
 * @Route("/orders")
 */
class OrdersController extends Controller
{
    var $useProxy = TRUE;
    var $proxyHost = 'localhost';//your host
    var $proxyPort = 3128;//your port
    /**
     * @Route("/new/{amount}")
     */
    public function newAction($amount)
    {
        $em = $this->getDoctrine()->getManager();

        $order = new Order($amount);
        $em->persist($order);
        $em->flush();

        return $this->redirect($this->generateUrl('cryptoconseils_blog_orders_show', [
            'id' => $order->getId(),
        ]));
    }

    /**
     * @Route("/{id}/show")
     * @Template
     */
    public function showAction(Request $request, Order $order)
    {
        $config = [
            'paypal_express_checkout' => [
//                'return_url' => $this->generateUrl('cryptoconseils_blog_home'),
                'return_url' => $this->generateUrl('cryptoconseils_blog_orders_paymentcreate', [
                    'id' => $order->getId(),
                ], UrlGeneratorInterface::ABSOLUTE_URL),
                'cancel_url' => $this->generateUrl('cryptoconseils_blog_orders_paymentcancel', [
                    'id' => $order->getId(),
                ], UrlGeneratorInterface::ABSOLUTE_URL),
//                'notify_url' => $this->generateUrl('cryptoconseils_blog_orders_ipn', [
//                    'id' => $order->getId(),
//                ], UrlGeneratorInterface::ABSOLUTE_URL),
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

//        if($result->getStatus() === Result::STATUS_SUCCESS) {
//            return $this->redirect($this->generateUrl('cryptoconseils_blog_orders_paymentcomplete', [
//                'id' => $order->getId(),
//            ]));
//        }

        throw $result->getPluginException();
    }

    /**
     * @Route("/{id}/payment/complete")
     */
    public function paymentCompleteAction(Order $order)
    {
        return new Response('Payment complete');
    }

    public function paymentCancelAction(Order $order)
    {
        return new Response('Payment cancel');
    }
}