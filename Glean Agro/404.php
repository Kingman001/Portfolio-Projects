<?php
define('TITLE', '');
include("./includes/head.php");
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
            <div class="card ms-auto me-auto text-center  m-5">
                <div class="card-header">
                    <div class="card-title">
                        <h1 class="text-primary_custom">Error Page!</h1>
                    </div>
                    <div class="card-body">
                        <img src="./assets/img/utils/404-error-with-cute-animal.avif" alt="404">
                        <p>
                            The page you are searching for does not exist
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>