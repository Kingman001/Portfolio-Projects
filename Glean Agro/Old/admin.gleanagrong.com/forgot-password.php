<?php 
include_once('code.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title> Forgot Password | Glean Agro</title>
  
  <!-- favicon image -->
  <link rel="icon" type="image/png" href="dist/img/logo.png">
  
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <span class="text-primary">Glean</span> <span class="text-success">Agro</span>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <!-- Alert -->
    <?php
        if (isset($_SESSION['errorMsg']))
        {
          $msgAlert = isset($_SESSION['successMsg'])? "alert-success" : "alert-danger";

          echo "<div class='alert $msgAlert alert-dismissible'>";
          echo '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
          echo '<h5><i class="icon fas fa-exclamation-triangle"></i> Warning!</h5>'. $_SESSION['error'];
          echo '</div>';
          unset($_SESSION['errorMsg']);
          $_SESSION['errorMsg'] = false;
          $_SESSION['error'] = "";
          session_destroy();
        }
      ?>
    <!-- /Alert -->
    <div class="card-body login-card-body">
      <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

      <form action="" method="post">
        <div class="input-group mb-3">
          <input type="email" class="form-control" name="email" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" name="btn_forgot_pwd" class="btn btn-primary btn-block">Request new password</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <p class="mt-3 mb-1">
        <a href="index">Login</a>
      </p>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>
