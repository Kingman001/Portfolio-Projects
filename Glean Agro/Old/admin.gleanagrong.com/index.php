<?php 
include_once('code.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login | Glean Agro</title>
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
  <style>
    #spinner {
      display: none;
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
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
          echo '<div class="alert alert-danger alert-dismissible">';
          echo '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
          echo '<h5><i class="icon fas fa-exclamation-triangle"></i> Warning!</h5>'. $_SESSION['error'];
          echo '</div>';
          unset($_SESSION['errorMsg']);
          unset($_SESSION['error']);
          // session_destroy();
        }
      ?>
    <!-- /Alert -->

    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form action="" method="post">
        <div class="input-group mb-3">
          <input type="email" name="email" value="<?php echo isset($_POST['email']) ? $_POST['email'] : ''; ?>" class="form-control" placeholder="Email" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" name="password" class="form-control" placeholder="Password" required>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" name="remember_me" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" id="btn_login" name="btn_login" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
          <div class="row">
            <div class="col">
              <div id="spinner" class="text-primary d-none" aria-live="assertive" role="status">
                Loading...
              </div>
            </div>
          </div>
        </div>
      </form>

      <p class="mb-1">
        <a href="forgot-password">Forgot password?</a>
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
// Spinner
if (window.jQuery) {
  function spinner() {
    $("#btn_login").off("click").on("click", function(e) {
      // e.preventDefault();
      $("#spinner").removeClass('d-none');

      // Simulate an async operation, for example, AJAX request
      setTimeout(function() {
        // Hide spinner again after operation completes
        $("#spinner").addClass('d-none');
      }, 20000); // 2 seconds for demonstration
    });
  }
} else {
  console.error('jQuery is not loaded.');
}
// spinner();
</script>
</body>
</html>
