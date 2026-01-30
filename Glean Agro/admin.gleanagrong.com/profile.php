<?php
define('TITLE',   'Profile');

include_once("./includes/header.php");
    include_once("./includes/navbar.php");
    include_once("./includes/sidebar.php");
  ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
  <?php
      define('PAGE', 'Profle');
      include_once("./includes/content-header.php");
    ?>
        <div class="row">
          <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <!-- <img class="profile-user-img img-fluid img-circle"
                       src="../../dist/img/user4-128x128.jpg"
                       alt="User profile picture"> -->
                       <i class="fas fa-user"></i>
                </div>

                <h3 class="profile-username text-center"><?php echo $_SESSION['fname'].' '.$_SESSION['oname']; ?></h3>

                <p class="text-muted text-center">Admin</p>

              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          
          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a class="nav-link active" href="#security_settings" data-toggle="tab">Security Settings</a></li>
                    <li class="nav-item"><a class="nav-link" href="#user_settings" data-toggle="tab">User Settings</a></li>
                    <li class="nav-item"><a class="nav-link" href="#activity" data-toggle="tab">Activity</a></li>
                </ul>
              </div><!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="security_settings">
                    <h4>Security settings </h4>
                    <ul class="list-group list-group-unbordered">
                        <li class="list-group-item">
                            <input 
                                type="checkbox"
                                id="login_alert" 
                                name="login_alert"
                                <?php 
                                    $db = new Database();
                                    $email = $_SESSION['email'];
                                    $db->query("SELECT login_alert FROM tbl_user WHERE email=:email LIMIT 1;");
                                    $db->bind(':email', $email);
                                    $db->execute();
                                    $alertValue = $db->single()->login_alert;
                                    echo "data-id='$alertValue'";
                                    echo ($alertValue == 1) ? "checked" : ""; 
                                ?>
                            >
                            Login alert
                        </li>
                        <li class="list-group-item">
                            <input type="checkbox" id="_2fa" name="_2fa" disabled>
                            2FA (Two factor authentication)
                        </li>
                    </ul>
                  </div>
                  <!-- /.tab-pane -->

                  <div class="tab-pane" id="user_settings">
                    <h4>User settings </h4>
                  </div>
                  <!-- /.tab-pane -->

                  <div class="tab-pane" id="activity">
                    <h4>Activity </h4>
                  </div>
                  <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div><!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
  <?php
    include_once("./includes/footer.php");
include_once("./includes/script.php");
?>