<?php
require_once('code.php');

if (isset($_GET['token']) && $_GET['token'] !== "")
{
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Recover Password | Glean Agro</title>

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
      $successMsg = isset($_SESSION['successMsg'])? "alert-success" : "alert-danger";
      
      echo "<div class='alert $successMsg alert-dismissible'>";
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
      <p class="login-box-msg">You are only one step a way from your new password, recover your password now.</p>

      <form action="" method="post">
        <div class="input-group mb-3">
          <input type="password" name="password" onkeyup="check_password_strength(this.value)" id="password" class="form-control" placeholder="Password" required>
          <input type="hidden" class="form-control" value="<?php echo $_GET['token'] ?>" name="token">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="confirm_password" class="form-control" placeholder="Confirm Password" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-danger">Password must contain alphanumric character, >= 9 length</p>
            <ul>
              <li>(ABCDabcd)</li>
              <li>(0123456789)</li>
              <li>#@!&*()$</li>
            </ul>
          </div>
          <span id="textAlert"></span>
          <!-- /.col -->
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" name="btn_change_pwd" id="btn_change_pwd" disabled class="btn btn-primary btn-block">Change password</button>
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
<script type="text/javascript">
const check_password_strength = (pwd) => {
  const allowedCharacters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%-_]).+$/;

  if (allowedCharacters.test(pwd))
  {
    $('#textAlert').removeClass('text-danger');
    
    if (pwd.length < 8)
    { $("#textAlert").addClass('text-danger');
      $("#textAlert").text("Password length must >= 8 characters");
      $("#btn_change_pwd").attr("disabled", "");
    }
    else 
    {
      $("#textAlert").removeClass('text-danger');
      $("#textAlert").addClass('text-success');
      $("#textAlert").text("Great :)");
      $("#btn_change_pwd").removeAttr("disabled");    
    } 
  }
  else 
  {
    $("#textAlert").addClass('text-danger');
    $("#textAlert").text("Password must be alphanumric characters");
    $("#btn_change_pwd").attr("disabled", "");
  }
}
</script>

</body>
</html>
<?php
}
else{
  header('Location: /');
}
