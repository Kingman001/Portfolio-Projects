<?php
require_once('database/Database.php');
require_once('classes/MailClient.php');

if(session_status() == PHP_SESSION_NONE)
{
	session_start(); //start session if session not start
}

// Login control
if (isset($_POST['btn_login']))
{
    // Checks if login already
    if (isset($_SESSION['logged_in']) && $_SESSION['email'] !== null)
    {
        header('Location: dashboard');
    }
    $email = $_POST['email'];
    $password = $_POST['password'];

    $db = new Database();
    $db->query("SELECT email, fname, oname, pwd, login_alert FROM tbl_user WHERE email=:email LIMIT 1;");
    $db->bind(':email', $email);

    // Check for remember me checkbox
    if (isset($_POST['remember_me']))
    {
        $_SESSION['remember_me'] = true;
    }

    if ($db->execute()) {
        if ($db->rowCount() > 0) {
            $data = $db->single();
          
            if (password_verify($password, $data->pwd)) {
                $_SESSION['logged_in'] = true;
                $_SESSION['email'] = $email;
                $_SESSION['fname'] = $data->fname;
                $_SESSION['oname'] = $data->oname;
                $_SESSION['login-time'] = time();

                // Initialize MailHelpler
                $loginAlert = new MailHelper();
                // Checks if login alert is enabled 
                ($data->login_alert == 1) ? $loginAlert->loginAlert($data->fname.' '.$data->oname, $email) : ' '; // Email login alert if enabled - 1(enabled) 0(disebled)
                
                // Checks for 2FA
                // ($data->_2fa == 1) ? '' : ''; //TODO

                // header('Location: otp'); TODO
                header('Location: dashboard');
            } else {
                $_SESSION['errorMsg'] = true;
                $_SESSION['error'] = "Invalid login credentials";
            }
        } else {
            $_SESSION['errorMsg'] = true;
            $_SESSION['error'] = "Invalid login credentials";
        }
    } else {
        die("Error: " . $db->getError());
    }


  $db->Disconnect();
}

// Forgot password request
if (isset($_POST['btn_forgot_pwd']))
{
    $email = $_POST['email'];
    $db = new Database();

    //fetching user record to check for verification
    $db->query("SELECT email, fname FROM tbl_user WHERE email = :email LIMIT 1;");
    $db->bind(':email', $email);
    if ($db->execute()) 
    {
        if ($db->rowCount() > 0) 
        {
            $result = $db->single();
            $fname = $result->fname;
            $token = password_hash(uniqid(), PASSWORD_BCRYPT);

            // Update the change_pwd from the database
            $db->query("UPDATE tbl_user SET pwd_request=1, token=:token WHERE email = :email;"); // Request for change of password
            $db->bind(':email', $email);
            $db->bind(':token', $token);

            $passwordResetEmail = new MailHelper();

            if ($db->execute() && $passwordResetEmail->passwordReset($email, $fname, $token)){
                $_SESSION['errorMsg'] = true;
                $_SESSION['successMsg'] = true;
                $_SESSION['error'] = "A password reset link has been sent to $email, check your spam box if not found";
            }else{
                $_SESSION['errorMsg'] = true;
                $_SESSION['error'] = "Something went wrong";
            }
        } 
        else {
            $_SESSION['errorMsg'] = true;
            $_SESSION['error'] = "If your email is in our record, a reset link will be send to you";
        }
    } 
    else 
    {
        die($db->getError());
    }
  $db->Disconnect();
}


// Password reset
if (isset($_POST['btn_change_pwd'])) {
    $db = new Database();

    $token = $_POST['token'];
    $pwd = $_POST['password'];
    $cPwd = $_POST['confirm_password'];

    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

    if ($pwd === $cPwd) { //Horney@6060
        // Check if change_pwd == 1 (for request password)
        $db->query("SELECT token, pwd_request FROM tbl_user WHERE token=:token LIMIT 1;");
        $db->bind(':token', $token);
        if ($db->execute())
        {
            if ($db->rowCount() > 0) {
                $pwd_request = $db->single()->pwd_request;

                if ($pwd_request == 1) { // Change password
                    $db->query("UPDATE tbl_user SET pwd=:hashedPwd, pwd_request = 2 WHERE token=:token;");
                    $db->bind(':hashedPwd', $hashedPwd);
                    $db->bind(':token', $token);
                    
                    if ($db->execute()) {
                        $_SESSION['errorMsg'] = true;
                        $_SESSION['successMsg'] = true;
                        $_SESSION['error'] = "Password changed successfully, you can login with the new password";
                    } else {
                        die("Error: ".$db->getError());
                    }
                } else if ($pwd_request == 2) // Password changed already (link expired)
                {
                    $_SESSION['errorMsg'] = true;
                    $_SESSION['error'] = "Link has expired";
                } else {
                    $_SESSION['errorMsg'] = true;
                    $_SESSION['error'] = "Bad Request 1";
                }
            } else {
                $_SESSION['errorMsg'] = true;
                $_SESSION['error'] = "Bad request 2";
            }
        }else
        {
            die("Error: ".$db->getError());
        }
    } 
    else {
        $_SESSION['errorMsg'] = true;
        $_SESSION['error'] = "Password does not match confirm password";
    }
    $db->Disconnect();
}