<?php
define('TITLE',   NULL);

include_once("./includes/header.php");
    include_once("./includes/navbar.php");
    include_once("./includes/sidebar.php");
  ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <?php
      define('PAGE', NULL);
      include_once("./includes/content-header.php");
      $db = new Database();

      // session_destroy();  
    ?>

    <!-- Info boxes -->
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="info-box">
          <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Contact form data</span>
            <a href="contact-form">
              <span class="info-box-number"> 
                <?php 
                  $db->query("SELECT * FROM tbl_contact;");
                  $db->execute();
                  $numContacts = $db->rowCount(); 
                  echo $numContacts; 
                ?> 
              </span>
            </a>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class="col-12 col-sm-6 col-md-4">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-cog"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Investors form data</span>
            <a href="investor">
              <span class="info-box-number">
                <?php 
                  $db->query("SELECT * FROM tbl_investment_data;");
                  $db->execute();
                  $numInvestors = $db->rowCount(); 
                  echo $numInvestors; 
                ?> 
              </span>
            </a>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class="clearfix hidden-md-up"></div>

      <div class="col-12 col-sm-6 col-md-4">
        <div class="info-box mb-3">
          <span class="info-box-icon bg-success elevation-1"><i class="fas fa-cog"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Newsletter data</span>
            <a href="newsletter">
              <span class="info-box-number">
                <?php 
                  $db->query("SELECT * FROM tbl_newsletter;");
                  $db->execute();
                  $numNewsletters = $db->rowCount(); 
                  echo $numNewsletters; 

                  $db->Disconnect();
                ?>
              </span>
            </a>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
    </div>
    <!-- /.row -->

  <?php
    include_once("./includes/footer.php");
include_once("./includes/script.php");
?>