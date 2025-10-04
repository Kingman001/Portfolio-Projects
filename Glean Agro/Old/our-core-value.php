<?php
define('TITLE', 'Our Core Value | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- ===================== About us ===================== -->
    <section class="about" id="aboutus">
        <!-- TODO -->
        <div class="about-content-text">
            <img src="./assets/img/services/field.jpg" alt="">
            <div class="ab_Up">
                <h1 class="text-center">About Us </h1>
                <p class="m-1 p-1">
                    We are focused on enhancing the livelihoods of smallholder farmers in Africa by utilizing technology
                    to connect small holder farmers with financial resources, data-driven agricultural methods, and local
                    and global markets, all aimed at achieving food security and combat poverty.
                </p>
            </div>
        </div>

        <h1 class="text-center mt-1 mb-1" id="about">About Us </h1>
        <div>
            <!-- Tab links -->
            <div class="tab">
                <button class="tablinks activeMenu" onclick="openTab(event, 'OurCoreValue')">Our Core Values</button>
                <button class="tablinks" onclick="openTab(event, 'WhoWeAre')">Who we Are</button>
                <button class="tablinks" onclick="openTab(event, 'Management')">Management</button>
                <button class="tablinks" onclick="openTab(event, 'Advisors')">Advisors</button>
            </div>

            <!-- <div class="about--content"> -->
            <div class="about-menu">
                <!-- Tab content -->
                <div id="OurCoreValue" class="tabcontent">
                    <div class="coreValueContainer">
                        <div class="OurCoreValue-content--right">
                            <!-- <h2 class="mt-1 mb-1">Our Core Values</h2> -->
                            <div>
                                <button class="collapsible">Partners First</button>
                                <div class="content-collapse">
                                    <p>In the forefront of all we do, we think of its positive impact on the lives of our partner small holder farmers.</p>
                                </div>
                            </div>
                            <div>
                                <button class="collapsible">Integrity in Service</button>
                                <div class="content-collapse">
                                    <p>Our credibility is in delivering our promises with openness and consistency.</p>
                                </div>
                            </div>
                            <div>
                                <button class="collapsible">Shared Prosperity</button>
                                <div class="content-collapse">
                                    <p>We believe in growing together with our partners. Our progress and growth should be visible in the lives of our partners.</p>
                                </div>
                            </div>
                            <div>
                                <button class="collapsible">Continuous Improvement</button>
                                <div class="content-collapse">
                                    <p>Just like Jim Collins, we believe good is the enemy of great. We continually seek for opportunity to innovate and improve.</p>
                                </div>
                            </div>
                            <div>
                                <button class="collapsible">Eliminate Complexity</button>
                                <div class="content-collapse">
                                    <p>Less is more, simplicity is the ultimate sophistication. Simple solutions to the most complex problems.</p>
                                </div>
                            </div>
                        </div>
                        <div class="OurCoreValue-content--left">
                            <img src="./assets/img/services/harvesting2.jpg" alt="">
                            <img src="./assets/img/services/harvesting.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div id="WhoWeAre" class="tabcontent">
                    <h2 class="mt-1 mb-1">Who we Are</h2>
                    <p class="">
                        We are on a mission to revolutionizing the agricultural sector by providing innovative and sustainable solutions to small holder farmers.
                    </p><br>
                    <p class="">
                        Our goal is to bring simple solutions and product offerings to support smallholder farmers become more productive, achieve self-sustainability, and empower women and youth in agriculture.
                    </p>
                </div>


                <div id="Management" class="tabcontent">
                    <!-- <h2 class="mt-1 mb-1">Leadership</h2> -->
                    <!-- ===================== Management  ===================== -->
                    <section class="management">
                        <h1 class="text-center text-secondary_custom">Management</h1>
                        <div class="heading-line"></div>
                        <p class="text-center">They lead. They inspire. They empower.</p>

                        <div class="management--content">
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Ishaku Elijah Audu.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Ishaku Elijah Audu</h2>
                                    <h3 class="text-secondary_custom">CEO & Founder</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Murtala Muazu.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Murtala Mu'azu</h2>
                                    <h3 class="text-secondary_custom">Commercial Manager</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Hannatu Yusuf.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Hannatu Yusuf</h2>
                                    <h3 class="text-secondary_custom">Director of People and Culture</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/John Shijah Bala.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>John Shijah Bala</h2>
                                    <h3 class="text-secondary_custom">Field Operations Lead</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- =========X============ /Management  =========X============ -->
                </div>
                <div id="Advisors" class="tabcontent">
                    <!-- ===================== Advisors  ===================== -->
                    <section class="management">
                        <h1 class="text-center text-secondary_custom">Advisors</h1>
                        <div class="heading-line"></div>
                        <p class="text-center">They mentor. They encourage. They impact.</p>

                        <div class="management--content">
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Seyi Edwards.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Seyi Edwards</h2>
                                    <h3 class="text-secondary_custom">Country Director for Planning, Procurement and Logistics, Mouka.</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Amaka Obehi.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Amaka Obehi, CPA</h2>
                                    <h3 class="text-secondary_custom">Senior Manager, Plan International Canada.</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Appolo Goma.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Appolo Goma</h2>
                                    <h3 class="text-secondary_custom">Founder/CEO APG Consult.</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Dipo Fasawe.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Dipo Fasawe</h2>
                                    <h3 class="text-secondary_custom">Co-Founder Satsapp</h3>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card--img">
                                    <img src="./assets/img/Mngts/Toyosi Orunmuyi.jpg" alt="Management">
                                </div>
                                <div class="card--text">
                                    <h2>Toyosi Orunmuyi</h2>
                                    <h3 class="text-secondary_custom">CEO Pentagrant Ltd.</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- =========X============ /Advisors  =========X============ -->
                </div>
            </div>
        </div>

    </section>
    <!-- =========X============ /About us =========X============ -->

    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>