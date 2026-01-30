<?php
define('TITLE', 'Our Partners | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- ===================== Our partner ===================== -->
    <section class="partner">
        <h1 class="text-secondary_custom mb-0 text-center">Our Partners </h1>
        <div class="heading-line"></div>
        <div class="orbit">
            <div class="orbit--center flexColumn">
                <!-- <img src="./assets/img/logo/logo.png" alt=""> -->
            </div>
            <div class="orbit--item flexColumn top">
                <img src="./assets/img/partners/Afex.jpg" alt="">
                <div class="text">
                    <h3>AFEX</h3>
                </div>
            </div>
            <div class="orbit--item flexColumn card left">
                <img src="./assets/img/partners/FCMB.png" alt="">
                <div class="text">
                    <h3>FCMB</h3>
                </div>
            </div>
            <div class="orbit--item flexColumn card top-left">
                <img src="./assets/img/partners/FMAN.jpg" alt="">
                <div class="text">
                    <h3>FMAN</h3>
                </div>
            </div>
            <div class="orbit--item flexColumn bottom">
                <img src="./assets/img/partners/Zenith Bank.png" data-tip="Hello" alt="">
                <div class="text">
                    <h3>Zenith</h3>
                </div>
            </div>
            <div class="orbit--item flexColumn right">
                <img src="./assets/img/partners/Olam.png" alt="">
                <div class="text">
                    <h3>Olam</h3>
                </div>
            </div>
        </div>
    </section>
    <!-- =========X============ /Our partner =========X============ -->
    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>