<?php
define('TITLE', 'Our Services | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- ===================== Our Services ===================== -->
    <section class="our-service">
        <h1 class="text-center text-secondary_custom mt-1 mb-1">Our Services </h1>
        <div class="heading-line"></div>
        <h2 class="mb-1 mt-2">What we do</h2>
        <p class="text-justify l-height-2 font-larger">
            At GleanAgro, we offer a comprehensive suite of services aimed at boosting the productivity and
            capacity of smallholder farmers, with a focus on delivering top-quality <span class="italic bold">agricultural inputs</span>,
            <span class="bold italic">support services</span>, <span class="bold italic">grain bank</span>, and access to <span class="bold italic">financial resources</span> and <span class="bold italic">markets</span>.
            <br>Our approach encompasses a wide array of cost-effective agricultural solutions that contribute to food security
            in Africa and beyond. Our overarching objective is to unlock enduring value for smallholder farmers
            through input financing, development, training,
            harvesting and marketing support, and access to premium markets, all while promoting social and financial inclusion.
        </p>

        <h2 class="mb-1 mt-1">
            Our Model
        </h2>
        <p class="font-larger">
            By harnessing our extensive experience, we strive to foster a sustainable food system and prosperity in Africa.
        </p>
        <ul class="model">
            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                <h3 class="mt-1">
                    1. Service Delivery
                </h3>
                <ul>
                    <li>Agricultural Input Financing.</li>
                    <li>Social Development and Training.</li>
                    <li>Harvest and Warehousing Solutions.</li>
                </ul>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                <h3 class="mt-1">
                    2. Commodity Trading/Investment
                </h3>
                <p class="mt-1 mb-1">We offer opportunities for private investors to trade and invest in commodities with our alternative investment opportunities providing investors with good returns.</p>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <h3 class="mt-1">
                    3. Training Hub Initiativ(Greenhouse Technology/Irrigation Farming)
                </h3>
                <p class="mt-1 mb-1">We offer training on greenhouse farming and irrigation farming, while providing irrigation support to small holder farmers around our training hub to improve access to food all year round.</p>
            </li>
        </ul>
        <h2 class="mt-1">
            Service Delivery
        </h2>
        <div class="service-content">
            <div data-aos="fade-right" data-aos-delay="100">
                <div class="img-circle">1</div>
                <div class="service-content--img">
                    <img src="./assets/img/services/harvesting2.jpg" alt="">
                </div>
                <div class="service-content--text">
                    <h3 class="">Agricultural Input Financing.</h3>
                    <p class="text-justify l-height-2">We offer best quality, cost effective and highly accessible farm inputs, providing small holder farmers with low-cost farm inputs including seeds, fertilizers, pesticides, and herbicides.</p>
                    <!-- <a href="">Read More...</a> -->
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
                <div class="img-circle">2</div>
                <div class="service-content--img">
                    <img src="./assets/img/services/world-map-f.png" alt="">
                </div>
                <div class="service-content--text">
                    <h3 class="">Social Development and Training.</h3>
                    <p class="text-justify l-height-2">We offer simple structured training to small holder farmers focusing more on our Training hub initiatives for women and youth empowerment. Our training focus on both agricultural modern know-how and social matters like leadership, financial literacy, nutrition, and health.</p>
                    <!-- <a href="">Read More...</a> -->
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="350">
                <div class="img-circle">3</div>
                <div class="service-content--img">
                    <img src="./assets/img/services/warehouse3.jpg" alt="">
                </div>
                <div class="service-content--text">
                    <h3 class="">Harvest and Warehousing Solutions.</h3>
                    <p class="text-justify l-height-2">We offer harvest support and storage services to smallholder farmers and help in preventing post-harvest losses, providing an avenue for farmers to bank with our grain bank initiative.</p>
                    <!-- <a href="">Read More...</a> -->
                </div>
            </div>
        </div>
        <div class="other-serviceContent">
            <div class="service-container">
                <div class="service-container--img">
                    <img src="./assets/img/services/commodity and money.jpg" alt="">
                </div>
                <div class="service-container--text">
                    <h3 class="">Commodity Trading/Investment.</h3>
                    <p class="text-wrapped-3 text-justify l-height-2">
                        We offer opportunities for private investors to trade and invest in commodities with our alternative investment opportunities providing investors with good returns.
                    </p>
                </div>
            </div>
            <div class="service-container">
                <div class="service-container--text">
                    <h3 class="">Training Hub Initiative (Greenhouse Technology/Irrigation Farming).</h3>
                    <p class="text-wrapped-3 text-justify l-height-2">We offer training on greenhouse farming and irrigation farming, while providing irrigation support to small holder farmers around our training hub to improve access to food all year round.</p>
                    <!-- <a href="">Read More...</a> -->
                </div>
                <div class="service-container--img">
                    <img src="./assets/img/farmers/11.jpg" class="img-fluid" alt="Training Inititiative">
                    <!-- <img src="./assets/img/services/greenhouse2.jpg" alt=""> -->
                </div>
            </div>
        </div>

    </section>
    <!-- =========X============ /Our Services =========X============ -->

    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>