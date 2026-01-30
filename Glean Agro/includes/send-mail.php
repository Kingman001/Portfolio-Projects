<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once('./assets/PHPMailer/src/PHPMailer.php');
require_once('./assets/PHPMailer/src/Exception.php');
require_once('./assets/PHPMailer/src/SMTP.php');


// Send user activation mail
function subscribe($name, $email)
{
  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.gleanagrong.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

    $mail->Username   = 'no-reply@gleanagrong.com';                     //SMTP username
    $mail->Password   = ")f+LTDDVTHDU";                                //SMTP password 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom('no-reply@gleanagrong.com', 'Newsletter');
    // $mail->addAddress(implode("; ", $email));     //Add a recipient
    $mail->addAddress($email);     //Add a recipient

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Glean Agro Newsletter Subscription';
    $mailTemplate =
      "
      <p> Thank you, <b>$name</b> for subscribing to our newsletter
      <br>We will keep you updated with our latest development.</p>
      <br>
      <p>If you don't want to receive our newsletter anymore, you can <a href='#'>opt out</a> </p>
      <p>Sincerely, 
      <br>The GleanAgro team</p>
    ";

    $mail->Body = $mailTemplate;

    newsletter_notification($name, $email);
    $mail->Send();
    // return true;
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "Success";
    $_SESSION['sessionMsg'] = "Subscription successfully";
    $_SESSION['sessionIcon'] = "success";
    // $_SESSION['location'] = "invest-in-us";
    // echo "<script>Alert('Subscription successfully');</script>";
  } catch (Exception $e) {
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "error";
    $_SESSION['sessionMsg'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    $_SESSION['sessionIcon'] = "error";
    // $_SESSION['location'] = "invest-in-us";
    // echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}');</script>";
  }
}

// Send a contact notification mail
function newsletter_notification($name, $email)
{
  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  // try {
  //Server settings
  // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'mail.gleanagrong.com';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

  $mail->Username   = 'no-reply@gleanagrong.com';                     //SMTP username
  $mail->Password   = ')f+LTDDVTHDU';                                //SMTP password 
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
  //Recipients
  $mail->setFrom('no-reply@gleanagrong.com', 'Notification');
  // $mail->addAddress(implode("; ", $email));     //Add a recipient
  $mail->addAddress('notification@gleanagrong.com');     //Add a recipient

  //Content
  $mail->isHTML(true);
  $mail->Subject = 'Newsletter notification';
  $mailTemplate =
    "<p> You have a Newsletter subcriber <b>$name</b> ($email) </p>
    <br>
    <br>
    <p>Add <b> $email </b> to the Newsletter mailing list.</p>
    ";
  $mail->Body = $mailTemplate;

  $mail->Send();
  // $_SESSION['errorMsg'] = true;
  // $_SESSION['errorTitle'] = "Success";
  // $_SESSION['sessionMsg'] = "Form received!";
  // $_SESSION['sessionIcon'] = "success";
  // $_SESSION['location'] = "contact";
  // } 
  // catch (Exception $e) {
  //   $_SESSION['errorMsg'] = true;
  //   $_SESSION['errorTitle'] = "error";
  //   $_SESSION['sessionMsg'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  //   $_SESSION['sessionIcon'] = "error";
  //   $_SESSION['location'] = "contact";
  //   // echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}');</script>";
  // }
}

// Send a contact notification mail
function contact_notification($name, $email, $business, $msg, $loginDetails)
{
  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.gleanagrong.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

    $mail->Username   = 'no-reply@gleanagrong.com';                     //SMTP username
    $mail->Password   = ')f+LTDDVTHDU';                                //SMTP password 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom('no-reply@gleanagrong.com', 'Notification');
    // $mail->addAddress(implode("; ", $email));     //Add a recipient
    $mail->addAddress('notification@gleanagrong.com');     //Add a recipient

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Contact form notification';
    
    $location = $loginDetails['location'];
    $time = $loginDetails['time'];
    $device = $loginDetails['device'];
    
    $mailTemplate =
      "
      <p> 
        You have a contact form submittion from <b>$name</b> ($email) 
        with the business name <b>$business </b><br>
        Device: <b>$device</b> <br>
        Location: <b>$location</b><br>
        Time: <b>$time</b>
      </p>
      <br><br>
      <p>$msg</p>
    ";

    $mail->Body = $mailTemplate;

    $mail->Send();
  } catch (Exception $e) {
    require_once('../contact.php');
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "error";
    $_SESSION['sessionMsg'] = "Message could not be sent. Mailer Error($e): {$mail->ErrorInfo}";
    $_SESSION['sessionIcon'] = "error";
    $_SESSION['location'] = "contact";
  }
}
// Send investment notification mail
function investment_notification($fullName, $nameOfOrganization, $typeOfInvestment)
{
  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.gleanagrong.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication

    $mail->Username   = 'no-reply@gleanagrong.com';                     //SMTP username
    $mail->Password   = ')f+LTDDVTHDU';                                //SMTP password 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    //Recipients
    $mail->setFrom('no-reply@gleanagrong.com', 'Notification');
    // $mail->addAddress(implode("; ", $email));     //Add a recipient
    $mail->addAddress('notification@gleanagrong.com');     //Add a recipient

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Investment form notification';
    $mailTemplate =
      "
      <p> You have an investment form submittion from <b>$fullName</b>, organisation($nameOfOrganization) with investment type ($typeOfInvestment)  </p>
    ";

    $mail->Body = $mailTemplate;

    $mail->Send();
  } catch (Exception $e) {
    $_SESSION['errorMsg'] = true;
    $_SESSION['errorTitle'] = "error";
    $_SESSION['sessionMsg'] = "Message could not be sent. Mailer Error($e): {$mail->ErrorInfo}";
    $_SESSION['sessionIcon'] = "error";
    $_SESSION['location'] = "contact";
  }
}