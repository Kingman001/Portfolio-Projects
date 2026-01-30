<?php
session_start();
unset($_SESSION['logged_in']);
unset($_SESSION['email']);
unset($_SESSION['fname']);
unset($_SESSION['oname']);
unset($_SESSION['login-time']);
unset($_SESSION['remember_me']);
session_destroy(); // Optionally destroy the session