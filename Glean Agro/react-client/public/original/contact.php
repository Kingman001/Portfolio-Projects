<?php
define('TITLE', 'Contact | Glean Agro');
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
include("./includes/head.php");
include("./includes/navbar.php");
include("./code.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- =========X============ Contact =========X============ -->
    <section class="contact">
        <h1 class="text-center text-secondary_custom mb-1 mt-1">Contact</h1>
        <div class="heading-line mb-1"></div>
        <?php
        if (isset($_SESSION['errorMsg'])) {
            echo '<script>
                                    Swal.fire({
                                    title: "' . $_SESSION['errorTitle'] . '",
                                    text: "' . $_SESSION['sessionMsg'] . '",
                                    icon: "' . $_SESSION['sessionIcon'] . '",
                                    showConfirmButton: true,
                                    confirmButtonText: "ok"
                                    }).then((result) => {
                                        if(result.value){
                                            window.location = "' . $_SESSION['location'] . '";
                                        }
                                    })
                                </script>';
            unset($_SESSION['errorTitle']);
            unset($_SESSION['errorMsg']);
            unset($_SESSION['sessionMsg']);
            unset($_SESSION['location']);
            unset($_SESSION['sessionIcon']);
        }
        ?>
        <div class="contact--content mt-1">
            <div class="contact--form">
                <div class="form-header mb-1 mt-1">
                    <h2>Get in touch</h2>
                </div>
                <div class="form-body">
                    <form action="#" method="post">
                        <?php $_SESSION['form_start'] = time(); ?>
                        
                        <input type="text" name="website" style="display:none">

                        <input type="text" name="business" placeholder="Business" required><br>
                        <input type="text" name="name" placeholder="Name" required><br>
                        <input type="email" name="email" placeholder="Email" required><br>
                        <textarea name="message" cols="30" rows="10" required></textarea><br>
                        <div class="bot-div mb-2">
                            <input type="checkbox" class="m-1" onchange="toggleBotDisplay()" id="bot_checkbox"> <label for="bot_checkbox"> I'm not a Bot? </label> 
                        </div>
                        <div class="bot-eval d-none mb-2" id="bot-eval">
                            <input type="number" disabled  class="q1"> <label class="bold">+</label>  
                            <input type="number" disabled  class="q2"> <label class="bold">=</label>
                            <input type="number" hidden disabled  class="total">
                            <input type="number" onkeypress="isEqual()" onkeyup="isEqual()" class="ans"  placeholder="Answer" required>
                            <i class="fas fa-check text-success d-none" id="success"></i>    
                            <i class="fas fa-close text-danger d-none" id="fail"></i>    
                        </div>
                        
                        <button class="bg-secondary_custom text-white mb-5" disabled name="btn_send" id="btn_send" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div class="contact--gmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.8755422486597!2d7.714525!3d11.122646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA3JzIxLjUiTiA3wrA0Mic1Mi4zIkU!5e0!3m2!1sen!2sng!4v1699384871784!5m2!1sen!2sng" width="400" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        <div class="contactDetail">
            <div class="contactDetail--content">
                <div class="contactDetail--icon">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="contactDetail--list">
                    <p>Phone:</p>
                    <p>+234 9050785803</p>
                </div>
            </div>
            <div class="contactDetail--content">
                <div class="contactDetail--icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contactDetail--list">
                    <p>Email:</p>
                    <p>Info@gleanagrong.com</p>
                </div>
            </div>
            <div class="contactDetail--content">
                <div class="contactDetail--icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contactDetail--list">
                    <p>Address:</p>
                    <p>No. 5b, Sokoto Road MTD Zaria, Kaduna State.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- =========X============ /Contact =========X============ -->
    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>