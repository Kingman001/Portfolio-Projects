<?php
define('TITLE', 'Join Us | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- ===================== Join-us ===================== -->
    <section class="join-us">
        <h1 class="text-secondary_custom text-center mt-1">Join Us</h1>
        <div class="heading-line"></div>
        <div class="join-us--content m-1">
            <p class="text-center">
                Join us in the mission to revolutionizing the agricultural sector.
                Let’s partner together towards shared prosperity, supporting rural smallholder farmers, women and youth.
            </p>
            <div class="join-us--card">
                <div>
                    <img src="./assets/img/utils/handshake-monochromatic.png" alt="">
                    <a href="invest-in-us" class="text-primary_custom">
                        <h3>
                            Partner with us
                        </h3>
                    </a>
                    <p>Let’s work together in revolutionizing the agricultural sector.</p>
                </div>
                <div>
                    <img src="./assets/img/utils/success_money_motivation.png" alt="">
                    <a href="community" class="text-primary_custom">
                        <h3>
                            Share in our success
                        </h3>
                    </a>
                    <p>
                        Success is not final, failure is not fatal: It is the courage to continue that counts. - <span class="bold italic"> Winston Churchill</span>
                    </p>
                </div>
                <div>
                    <img src="./assets/img/utils/career-isometric-d53c4.png" alt="">
                    <a href="careers" class="text-primary_custom">
                        <h3>
                            Advance your career with us
                        </h3>
                    </a>
                    <p>
                        When the grass looks greener on the other side of the fence, it may be that they take better care of it there. - <span class="bold italic"> Cecil Selig </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- =========X============ /Join-us =========X============ -->

    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>