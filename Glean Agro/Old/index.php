<?php
define('TITLE', '');
require './includes/head.php';
include './includes/navbar.php';
?>
<!-- ===================== Main site section ===================== -->
<main>

    <!-- ===================== Site title ===================== -->
    <section class="site-title">
        <div class="site-title--left" data-aos="fade-up" data-aos-delay="200">
            <h1 class="text-white">Revolutionizing Agriculture, Partnership for Shared Prosperity</h1>
            <p class="text-light text-justify p-1">
                We are focused on enhancing the livelihoods of smallholder farmers in Africa by utilizing technology to connect small holder farmers with financial resources,
                data-driven agricultural methods, and local and global markets, all aimed at achieving food security and combat poverty.
            </p>
            <a href="who-we-are"><button class="btn bg-secondary_custom text-white">Learn more <i class="fas fa-angle-right fa-sm"></i><i class="fas fa-angle-right fa-sm"></i><i class="fas fa-angle-right fa-sm"></i> </button></a>
        </div>
        <div class="site-title--right">
            <div class="video-box">
                <div class="video-img"></div>
                <!-- Youtube embedding -->
                <!-- <iframe src="https://www.youtube.com/embed/AiRhVOfQu7M?controls=1&loop=1" title="Glean Agro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe> -->
                <a href="https://youtu.be/AiRhVOfQu7M" class="glightbox position-absolute">
                      <span>
                        <i class="fas fa-play-circle"></i>
                      </span>
                      <span class="border-animation border-animation--border-1"></span>
                      <span class="border-animation border-animation--border-2"></span>
                </a>
            </div>
        </div>
    </section>
    <!--APPLY WAVES FROM getwaves.io -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0A9628" fill-opacity="1" d="M0,32L60,74.7C120,117,240,203,360,202.7C480,203,600,117,720,112C840,107,960,181,1080,213.3C1200,245,1320,235,1380,229.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
    <!-- =========X============ /Site title =========X============ -->

    <!-- ===================== Our Services ===================== -->
    <section class="our-service">
        <h1 class="text-center text-secondary_custom">Our Services </h1>
        <div class="heading-line"></div>
        <div class="coll-2">
            <div>
                <img src="./assets/img/farmers/1.jpg" alt="farmer">
            </div>
            <div>
                <h2 class="mb-1 mt-1">What we Do</h2>
                <p class="text-justify l-height-2 font-larger">
                    /* The text "At GleanAgro, we offer a comprehensive suite of services aimed at
                    boosting the productivity and capacity of smallholder farmers, with a focus on
                    delivering top-quality agricultural inputs, support services, grain bank, and
                    access to financial resources and markets..." is describing the services
                    provided by GleanAgro to support smallholder farmers. These services include
                    providing high-quality agricultural inputs, support services, establishing a
                    grain bank, and facilitating access to financial resources and markets. The goal
                    is to enhance the productivity and capabilities of smallholder farmers,
                    ultimately contributing to food security and poverty alleviation in the
                    agricultural sector. */
                    At GleanAgro, we offer a comprehensive suite of services aimed at boosting the productivity and
                    capacity of smallholder farmers, with a focus on delivering top-quality <span class="italic bold">agricultural inputs</span>,
                    <span class="bold italic">support services</span>, <span class="bold italic">grain bank</span>, and access to <span class="bold italic">financial resources</span> and <span class="bold italic">markets</span>...
                </p>
                <a href="service" class="text-primary_custom italic">Read more...</a>
            </div>
        </div>
    </section>
    <!-- =========X============ /Our Services =========X============ -->

    <!-- ===================== Partner ===================== -->
    <section class="trusted">
        <h1 class="text-center text-secondary_custom mt-1 mb-1" id="ourpartners">Our Partners </h1>
        <div class="heading-line"></div>
        <div class="trusted--carousel owl-carousel owl-theme">
            <div class="item">
                <img src="./assets/img/partners/Afex.jpg" alt="partner-1">
            </div>
            <div class="item">
                <img src="./assets/img/partners/FCMB.png" alt="partner-2">
            </div>
            <div class="item">
                <img src="./assets/img/partners/FMAN.jpg" alt="partner-3">
            </div>
            <div class="item">
                <img src="./assets/img/partners/Olam.png" alt="partner-4">
            </div>
            <div class="item">
                <img src="./assets/img/partners/Zenith Bank.png" alt="partner-5">
            </div>
        </div>
    </section>
    <!-- =========X============ /Partner =========X============ -->

    <!-- ===================== About us ===================== -->
    <section class="about mt-1" id="aboutus">
        <h1 class="text-center text-secondary_custom">About Us </h1>
        <div class="heading-line"></div>


        <div class="about--content">
            <div class="about--img">
                <img src="./assets/img/services/harvest.jpg" alt="Harvest Image" style="filter: contrast(150%);">
            </div>
            <div class="about--text">
                <h2>Who we Are</h2>
                <p class="">
                    We are on a mission to revolutionizing the agricultural sector by providing innovative and sustainable solutions to small holder farmers.
                    <br>
                    Our goal is to bring simple solutions and product offerings to support smallholder farmers become more productive, achieve self-sustainability, and empower women and youth in agriculture.
                </p>

                <h2>Our Core Values</h2>
                <p>
                    <span class="bold italic">Partners First:</span> In the forefront of all we do, we think of its positive impact on the lives of our partner small holder farmers.
                </p>
                <p class="">
                    <span class="bold italic">Integrity in Service:</span> Our credibility is in delivering our promises with openness and consistency.
                </p>

                <p>
                    <span class="bold italic">Shared Prosperity:</span> We believe in growing together with our partners. Our progress and growth should be visible in the lives of our partners.
                </p>
                <div>
                    <a class="text-primary_custom italic" href="our-core-value">Read more</a>
                    <!-- <a href="management" data-aos="fade-down-left" data-aos-duration="1000" class="bg-secondary_custom">Management</a> -->
                </div>
            </div>
        </div>
    </section>
    <!-- =========X============ /About us =========X============ -->

    <div class="m-1 text-center">
        <h1 class="text-secondary_custom">Join Us</h1>
        <div class="heading-line"></div>

        <p class="mt-1">
            Join us in our mission to revolutionize the agricultural sector. Let's collaborate to achieve shared prosperity by supporting rural smallholder farmers, women, and youth.
        </p>
    </div>
    <div class="join-us--card">
        <div>
            <img src="./assets/img/utils/handshake-monochromatic.png" alt="">
            <a href="invest-in-us" class="text-primary_custom">
                <h3>
                    Partner with us
                </h3>
            </a>
            <p>Together, we can change the narratives of the agricultural sector.</p>
        </div>
        <div>
            <img src="./assets/img/utils/success_money_motivation.png" alt="">
            <a href="success-story" class="text-primary_custom">
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

    <?php include './includes/quiklinks.php'; ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include './includes/scripts.php';
include './includes/footer.php';


?>
