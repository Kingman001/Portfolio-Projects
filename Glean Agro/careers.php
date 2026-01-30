<?php
define('TITLE', 'Career | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- ===================== careers ===================== -->
    <section class="careers">
        <h1 class="text-secondary_custom text-center">Careers</h1>
        <div class="heading-line"></div>
        <div class="careers--content">
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident?</p> -->
            <div class="careers--job_search">
                <select onchange="checkCareer()" name="category" id="category">
                    <option value="">Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Commercial">Commercial</option>
                </select>
                <select onchange="checkCareer()" name="year" id="year">
                    <option value="">Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
            <h2 class="no-job">No Job found!</h2>
            <div class="careers--job_listing">
                <div class="job_listing--card">
                    <div>
                        <img src="./assets/img/logo/logo.png" alt="logo">
                        <h3>Commercial</h3>
                    </div>
                    <div>
                        <p>Sept. 18 2023</p>
                        <button onclick="enlargeJobDetails()" class="p-2 border border-none ">
                            Export Manager 
                        </button>
                    </div>
                </div>

            </div>
            <div class="careers--job_detail" id="careers--job_detail">
                <!-- TODO use GET for the job id for listing -->
                <h2 class="mt-1">Export Manager</h2>
                <p class="mb-1">Sept. 18 2023</p>
                <p class="mb-1">
                    The Export Manager is to administer all exports of goods and ensure compliance to all organizational policies and procedures and monitor all financial and currency processes and transactions and manage all communication with export authorities for all required countries. Your duties will include designing and implementing all export strategies and activities and ensure adherence to all project requirements and prepare all export documents within required timeframe and schedule efficient shipping activities and identify appropriate transportation methods in assistance with customers.
                </p>

                <h3>MAIN RESPONSIBILIES</h3>
                <ul class="mt-1 mb-1">
                    <li>
                        Developing and implementing plans for increasing market share through brand awareness, new product development, and advertising
                    </li>
                    <li>
                        Establishing and managing relationships with freight carriers and other service providers to ensure smooth operations
                    </li>
                    <li>
                        Managing relationships with international clients, vendors, and business partners
                    </li>
                    <li>
                        Negotiating contracts with new vendors and clients as well as terminating contracts with existing clients or vendors when necessary
                    </li>
                    <li>
                        Managing the inventory of goods held in storage facilities, including monitoring stock levels and ordering replacements when necessary
                    </li>
                    <li>
                        Preparing financial reports about sales activity, costs, and profit margins for international markets
                    </li>
                    <li>
                        Managing the supply chain process from procurement to shipment to customer delivery
                    </li>
                    <li>
                        Cooperating with other departments within the company to ensure that all international business operations
                    </li>
                </ul>
                <!-- <a href="#" class="text-secondary_custom">Apply to Job <i class="fas fa-arrow-right"></i></a> -->
            </div>
        </div>
    </section>
    <!-- =========X============ /careers =========X============ -->

    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>