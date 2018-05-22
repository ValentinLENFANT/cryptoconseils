<?php
if (isset($_REQUEST['firstname'],$_REQUEST['email'])) {
      
    $firstname = $_REQUEST['firstname'];
	$lastname = $_REQUEST['lastname'];
	$lastname = $_REQUEST['subject'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];
      
    // Set your email address where you want to receive emails. 
    $to = 'cryptoconseils@mail.com';
      
    $subject = 'Contact Request From Website';
    $headers = "From: ".$firstname." <".$email."> \r\n";
      
    $send_email = mail($to,$subject,$message,$headers);
      
    echo ($send_email) ? 'success' : 'error';
      
}
?>