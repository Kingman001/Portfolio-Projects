<?php
define('TITLE', 'FAQ | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- ===================== FAQs ===================== -->
    <section class="faq">
        <h1 class="text-center text-secondary_custom">FAQ's</h1>
        <div class="heading-line"></div>
        <p class="text-center">Frequently asked question, get knowledge before hand.</p>

        <div class="faq--content">
            <div>
                <button class="collapsible bg-primary_custom">What Crops does GleanAgro support farmers with Input and Training?</button>
                <div class="content-collapse">
                    <p>GleanAgro currently focuses on Wheat, Soybean, and groundnut farm input; however, we are open to other grain and cereal crops as we attract the right level of funding support.</p>
                </div>
            </div>
            <div>
                <button class="collapsible bg-primary_custom">What Crops are you focused on with your Greenhouse/Training Hub Initiative?</button>
                <div class="content-collapse">
                    <p>We focus on vegetables and trials on new varieties that are viable with the soil type within our training hub environment.</p>
                </div>
            </div>
            <div>
                <button class="collapsible bg-primary_custom">Do you provide support and farm input to Commercial and Large-Scale Farmers?</button>
                <div class="content-collapse">
                    <p>No, our focus is to support small holder farmers at the bottom of the pyramid become more productive and improve their living standard, thereby making agriculture an attractive venture for women and youths and reducing the menace of unemployment.</p>
                </div>
            </div>
            <div>
                <button class="collapsible bg-primary_custom">What is Commodity Training?</button>
                <div class="content-collapse">
                    <p>Commodity trading is trading in anything that has value that can be bought or sold, in GleanAgro perspective majorly agricultural products.</p>
                </div>
            </div>
            <div>
                <button class="collapsible bg-primary_custom">What Commodities do GleanAgro trade in?</button>
                <div class="content-collapse">
                    <p>Tradable commodities like Maize, Paddy rice, Wheat, Soybeans, Sorghum, Ginger, and Chili Peppers.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- =========X============ /FAQs =========X============ -->
    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>