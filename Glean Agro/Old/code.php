<?php
include("./includes/send-mail.php");
include("./database/Database.php");

// Newsletter subscription
if (isset($_POST['btn_subscribe'])) {
    // Honeypot
    if (!empty($_POST['website'])) {
        exit;
    }
    

    // User agent
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    if (empty($userAgent) || preg_match('/bot|crawl|slurp|spider/i', $userAgent)) {
        exit;
    }
    
    $db = new Database();

    $subscribe_name = trim($_POST['subscribe_name']);
    $subscribe_email = trim($_POST['subscribe_email']);

    $db->query("SELECT * FROM tbl_newsletter WHERE email = :email;");
    $db->bind(':email', $subscribe_email);
    $db->execute();
    if ($db->rowCount() > 0) {
        $_SESSION['errorMsg'] = true;
        $_SESSION['errorTitle'] = "warning";
        $_SESSION['sessionMsg'] = "Already a subscriber";
        $_SESSION['sessionIcon'] = "warning";
        // echo "<script>alert('Already subscribed');</script>";
    } else {
        $db->query("INSERT INTO tbl_newsletter(names, email) VALUES(:names, :email);");
        $db->bind(':names', $subscribe_name);
        $db->bind(':email', $subscribe_email);
        if ($db->execute()) {
            // newsletter_notification($subscriber_name, $subscribe_email);
            subscribe($subscribe_name, $subscribe_email);
            if ($db->rowCount() == 0) {
                $_SESSION['errorMsg'] = true;
                $_SESSION['errorTitle'] = "error";
                $_SESSION['sessionMsg'] = "Error occured!";
                $_SESSION['sessionIcon'] = "error";
            }
        } else {
            die($db->getError());
        }
    }
}

// Investment form
if (isset($_POST['btn_invest'])) {
    // Honeypot
    if (!empty($_POST['website'])) {
        exit;
    }
    
    // Time-based
    $timeTaken = time() - ($_SESSION['form_start'] ?? time());
    if ($timeTaken < 3) {
        exit;
    }

    // User agent
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    if (empty($userAgent) || preg_match('/bot|crawl|slurp|spider/i', $userAgent)) {
        exit;
    }
    
    $_SESSION['loading'] = true;
    $db = new Database();

    $email = trim($_POST['email']);
    $fullName = trim($_POST['fullName']);
    $mobileNo = $_POST['mobileNo'];
    $nameOfOrganization = trim($_POST['nameOfOrganization']);
    $typeOfInvestment = $_POST['typeOfInvestment'];
    $typeOfInvestor = $_POST['typeOfInvestor'];

    $db->query("SELECT * FROM tbl_investment_data WHERE email = :email;");
    $db->bind(':email', $email);
    $db->execute();
    if ($db->rowCount() > 0) {
        $_SESSION['errorMsg'] = true;
        $_SESSION['errorTitle'] = "Warning";
        $_SESSION['sessionMsg'] = "Email exists!";
        $_SESSION['sessionIcon'] = "warning";
        // $_SESSION['location'] = "invest-in-us";
    } else {
        $db->query("INSERT INTO 
            tbl_investment_data(email, fullName, mobileNo, nameOfOrganization, typeOfInvestment, typeOfInvestor)
            VALUES(:email, :fullName, :mobileNo, :nameOfOrganization, :typeOfInvestment, :typeOfInvestor);");
        //bind data
        $db->bind(':email', $email);
        $db->bind(':fullName', $fullName);
        $db->bind(':mobileNo', $mobileNo);
        $db->bind(':nameOfOrganization', $nameOfOrganization);
        $db->bind(':typeOfInvestment', $typeOfInvestment);
        $db->bind(':typeOfInvestor', $typeOfInvestor);

        if ($db->execute()) {
            if ($db->rowCount() > 0) {
                investment_notification($fullName, $nameOfOrganization, $typeOfInvestment);
                $_SESSION['errorMsg'] = true;
                $_SESSION['errorTitle'] = "Success";
                $_SESSION['sessionMsg'] = "Request received, you will get in touch within 24 hours!";
                $_SESSION['sessionIcon'] = "success";
                $_SESSION['location'] = "invest-in-us";
            } else {
                $_SESSION['errorMsg'] = true;
                $_SESSION['errorTitle'] = "Error";
                $_SESSION['sessionMsg'] = "Something went wrong...try again!";
                $_SESSION['sessionIcon'] = "error";
                // $_SESSION['location'] = "invest-in-us";
            }
        } else {
            die($db->getError());
        }
    }
}

function getLocationFromIp($ip) {
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
function getLoginDetails() {
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
    $location = getLocationFromIp($userIp);

    // Get the current time
    $currentTime = new DateTime(null, new DateTimeZone('Africa/Lagos')); // WAT timezone
    $currentTimeFormatted = $currentTime->format('Y-m-d H:i:s A');


    return [
        'device' => $deviceType,
        'location' => $location,
        'time' => $currentTimeFormatted
    ];
}

// Contact form
if (isset($_POST['btn_send'])) {
    // Honeypot
    if (!empty($_POST['website'])) {
        exit;
    }
    
    // Time-based
    $timeTaken = time() - ($_SESSION['form_start'] ?? time());
    if ($timeTaken < 3) {
        exit;
    }

    // User agent
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    if (empty($userAgent) || preg_match('/bot|crawl|slurp|spider/i', $userAgent)) {
        exit;
    }
    
    // $_SESSION['loading'] = true;
    $db = new Database();

    $business = trim($_POST['business']);
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    $loginDetails = getLoginDetails();

    $db->query("INSERT INTO tbl_contact(names, email, business, msg) VALUES(:names, :email, :business, :msg);");
    $db->bind(':names', $name);
    $db->bind(':email', $email);
    $db->bind(':business', $business);
    $db->bind(':msg', $message);

    if ($db->execute()) {
        if ($db->rowCount() > 0) {
            contact_notification($name, $email, $business, $message, $loginDetails);
            $_SESSION['errorMsg'] = true;
            $_SESSION['errorTitle'] = "Success";
            $_SESSION['sessionMsg'] = "Form received!";
            $_SESSION['sessionIcon'] = "success";
            $_SESSION['location'] = "contact";
        } else {
            $_SESSION['errorMsg'] = true;
            $_SESSION['errorTitle'] = "error";
            $_SESSION['sessionMsg'] = "Error occured!";
            $_SESSION['sessionIcon'] = "error";
            $_SESSION['location'] = "contact";
        }
    } else {
        die($db->getError());
    }
    $db->Disconect();
}