<?php
if(session_status() == PHP_SESSION_NONE){
    session_start();
}


if (isset($_SESSION['remember_me']))
{
    //Auto logout after 24 hours on checkboxed
    $idle_time = 1440; 
}else 
{
    //Auto logout on idle
    $idle_time = 900;  // 60 x 15 => Logout after 15 minutes
}


// Checks for authorization
if(!$_SESSION['email'] && !$_SESSION['logged_in'])
{
    $_SESSION['errorMsg'] = true;
    $_SESSION['error'] = "Login is required";
    header('location: /'); // index
}
elseif(time() - $_SESSION['login-time'] > $idle_time ){ //Auto logout on idle
    $_SESSION['errorMsg'] = true;
    $_SESSION['error'] = "Your session has expired, please login back";
    
    unset($_SESSION['logged_in']);
    unset($_SESSION['email']);
    unset($_SESSION['fname']);
    unset($_SESSION['oname']);
    unset($_SESSION['login-time']);
    unset($_SESSION['remember_me']);
    
    header("Location: /"); // index
}
else
{
    $_SESSION['login-time'] = time(); 
}
