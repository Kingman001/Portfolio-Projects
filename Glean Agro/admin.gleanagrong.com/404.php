<?php
define('TITLE', '404');

include_once("./includes/header.php");
    include_once("./includes/navbar.php");
    include_once("./includes/sidebar.php");
  ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <?php
        define('PAGE', '404');
        include_once("./includes/content-header.php");
    ?>


        <div class="row">
            <div class="col-12">
                <div class="card text-center">
                    <div class="card-header">
                        <h3 class="">Error Page!</h3>
                    </div>
                    <div class="card-body">
                        <img src="dist/img/404.jpg" alt="404">
                        <p>
                            The page you are searching for does not exist
                        </p>
                    </div>
                </div>
            </div>
        </div>


  <?php
    include_once("./includes/footer.php");
include_once("./includes/script.php");
?>