<?php
require_once('../assets/PHPMailer/src/PHPMailer.php');
require_once('../assets/PHPMailer/src/Exception.php');
require_once('../assets/PHPMailer/src/SMTP.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Send user activation mail
function send_mail($staff_id, $email)
{
  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = '';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                                //SMTP password 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom('', 'SMS');
    $mail->addAddress($email);     //Add a recipient

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'SMS Account activation';
    $mail_template =
      "
      <h1> School Management System Registration confirmation </h1>
      <h3> Please click the below link to activate your account</h3>
      <p>Please do not reply to this mail address</p>
      Click <a href='https://test.an-nur-info-tech.com/activation-form?staff_id=$staff_id'>Here</a> 
      <br />
      <br />
      <p>Thanks.</p>
      <br />
      <p>Regards,</p>
      <small>The An-Nur-Info-Tech team</small>
    ";

    $mail->Body = $mail_template;

    $mail->Send();
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "Great";
    $_SESSION['sessionMsg'] = "Success";
    $_SESSION['sessionIcon'] = "success";
    $_SESSION['location'] = "staff-reg-page";
    // return true;
  } catch (Exception $e) {
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "Error";
    $_SESSION['sessionMsg'] = "Mailer Error: {$mail->ErrorInfo}";
    $_SESSION['sessionIcon'] = "error";
    $_SESSION['location'] = "staff-reg-page";
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}

// Sending a user an email
function send_user_mail($sender, $sender_name, $recipient, $mail_subject, $mail_cc, $mail_body)
{
  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = '';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom('', 'SMS');
    $mail->addAddress($recipient);     //Add a recipient
    $mail->addReplyTo($sender, $sender_name,);
    
    if(!$mail_cc == null){
      $mail->addCC($mail_cc);
    }

    $mail->isHTML(true);
    $mail->Subject = $mail_subject;
    $mail->Body = $mail_body;

    $mail->Send();
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "Success";
    $_SESSION['sessionMsg'] = "Your email has been sent";
    $_SESSION['sessionIcon'] = "success";
    $_SESSION['location'] = "staff-reg-page";
  } catch (Exception $e) {
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "Error";
    $_SESSION['sessionMsg'] = "Mailer Error: {$mail->ErrorInfo}";
    $_SESSION['sessionIcon'] = "error";
    $_SESSION['location'] = "staff-reg-page";
  }
}
