<?php
require_once('./plugins/PHPMailer/src/PHPMailer.php');
require_once('./plugins/PHPMailer/src/Exception.php');
require_once('./plugins/PHPMailer/src/SMTP.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

class MailHelper
{
  private $host = "mail.gleanagrong.com"; // 
  private $username = "no-reply@gleanagrong.com";
  private $password = ")f+LTDDVTHDU";
  private $email = null;

  public function __construct()
  {
    
    // Initialize PHPMailer
    $this->mail = new PHPMailer(true);

    try {
        //Server settings 
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
        $this->mail->isSMTP();                                            //Send using SMTP
        $this->mail->Host       = $this->host;                     //Set the SMTP server to send through
        $this->mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        
        $this->mail->Username   = $this->username;                     //SMTP username
        $this->mail->Password   = $this->password;                                //SMTP password 
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $this->mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
        //Content
        $this->mail->isHTML(true);
    
    } catch(Exceptiion $e)
    {
        error_log("Mailer Error: {$e->getMessage()}");
        return false;
    }
  }

  // Send a contact notification mail
  public function loginAlert($name, $email)
  {
    try {
        //Recipients
        $this->mail->setFrom('no-reply@gleanagrong.com', 'Glean Agro');
        $this->mail->addAddress($email);     //Add a recipient
        // $this->mail->addReplyTo('');

        $loginDetails = $this->getLoginDetails();
        
        $this->mail->Subject = 'Login Alert';
        $template = file_get_contents('mail-template/login-alert.html');
        $template = str_replace(
            ['{{name}}', '{{device}}', '{{location}}', '{{time}}', '{{year}}'], 
            [$name, $loginDetails['device'], $loginDetails['location'], $loginDetails['time'], date('Y')], 
            $template);
        
        $this->mail->Body = $template;
    
        $this->mail->Send();
        return true;
    } catch (Exception $e) {
      error_log("Login alert email failed: {$e->getMessage()}");
      return false;
    }
}  

  // Password reset email
  public function passwordReset($email, $name, $token)
  {
    try {
      //Recipients
      $this->mail->setFrom('no-reply@gleanagrong.com', 'Password Reset');
      $this->mail->addAddress($email);     //Add a recipient
      // $this->mail->addReplyTo('');

      $this->mail->Subject = "Password reset request";

      $template = file_get_contents('mail-template/password-reset.html');
      $template = str_replace(['{{name}}', '{{token}}', '{{year}}'], [$name, $token, date('Y')], $template);

      $this->mail->Body = $template;

      $this->mail->send();
      return true;
    } catch (Exception $e) {
      error_log("Password reset email failed: {$e->getMessage()}");
      return false;
    }
  } 

  private function getLoginDetails() {
    // Get the User-Agent string (to detect device type)
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    
    // Detect device type using User-Agent string (basic detection for mobile/desktop)
    if (preg_match('/mobile/i', $userAgent)) {
        $deviceType = 'Mobile';
    } elseif (preg_match('/tablet/i', $userAgent)) {
        $deviceType = 'Tablet';
    } else {
        $deviceType = 'Desktop';
    }

    // Get the user's IP address
    $userIp = $_SERVER['REMOTE_ADDR'];

    // Use an external API to get the location details based on the user's IP
    $location = $this->getLocationFromIp($userIp);

    // Get the current time
    $currentTime = new DateTime(null, new DateTimeZone('Africa/Lagos')); // WAT timezone
    $currentTimeFormatted = $currentTime->format('Y-m-d H:i:s A');


    return [
        'device' => $deviceType,
        'location' => $location,
        'time' => $currentTimeFormatted
    ];
  }
/*
  private function getLocationFromIp($ip) {
    // Use a free IP geolocation API like ipinfo.io or ipstack.com
    $apiUrl = "http://ipinfo.io/{$ip}/json";
    
    // Use file_get_contents or cURL to get the data from the API
    $locationData = @file_get_contents($apiUrl);

    // If the API request fails or no location data is found, return a default value
    if ($locationData === false) {
      return 'Unknown Location';
    }

    $locationData = json_decode($locationData, true);

    // Extract city or location data
    $location = isset($locationData['city']) ? $locationData['city'] : 'Unknown Location';
    return $location;
  }
  */

  private function getLocationFromIp($ip) {
    // Use a free IP geolocation API like ipinfo.io
    $apiUrl = "http://ipinfo.io/{$ip}/json";

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $apiUrl);            // Set the API URL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);     // Return the response as a string
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);     // Follow redirects if any
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);              // Set a timeout of 10 seconds

    // Execute the cURL request
    $locationData = curl_exec($ch);

    // Check for cURL errors
    if(curl_errno($ch)) {
        // If there's an error with the cURL request, return a default value
        curl_close($ch);  // Close the cURL session
        return 'Unknown Location';
    }

    // Close the cURL session
    curl_close($ch);

    // If the API request fails or no location data is found, return a default value
    if ($locationData === false) {
        return 'Unknown Location';
    }

    // Decode the JSON response into an associative array
    $locationData = json_decode($locationData, true);

    // Extract city or location data
    $location = isset($locationData['city']) ? $locationData['city'] : 'Unknown Location';

    return $location;
  }

}
