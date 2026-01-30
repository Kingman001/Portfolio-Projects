<?php
require_once("./code.php");
// include("./database/Database.php");
// Newsletter subscription
// if (isset($_POST['btn_subscribe']))
// {
//     $db = new Database();

//     $subscribe_name = trim($_POST['subscribe_name']);
//     $subscribe_email = trim($_POST['subscribe_email']);

//     $db->query("SELECT * FROM tbl_newsletter WHERE email = :email;");
//     $db->bind(':email', $subscribe_email);
//     $db->execute();
//     if ($db->rowCount() > 0){
//         $_SESSION['errorMsg'] = true;
//         $_SESSION['errorTitle'] = "warning";
//         $_SESSION['sessionMsg'] = "Already a subscriber";
//         $_SESSION['sessionIcon'] = "warning";
//         // echo "<script>alert('Already subscribed');</script>";
//     }else{
//         $db->query("INSERT INTO tbl_newsletter(names, email) VALUES(:names, :email);");
//         $db->bind(':names', $subscribe_name);
//         $db->bind(':email', $subscribe_email);
//         if ($db->execute()){
//             subscribe($subscribe_name, $subscribe_email);
//             if ($db->rowCount() == 0){
//                 $_SESSION['errorMsg'] = true;
//                 $_SESSION['errorTitle'] = "error";
//                 $_SESSION['sessionMsg'] = "Error occured!";
//                 $_SESSION['sessionIcon'] = "error";
//             }
//         }else{
//             die($db->getError());
//         }
//     }

// }
?>
<!-- ===================== Quicklinks ===================== -->
<section class="quicklink">
    <?php
    if (isset($_SESSION['errorMsg'])) {
        echo '<script>
                Swal.fire({
                    title: "' . $_SESSION['errorTitle'] . '",
                    text: "' . $_SESSION['sessionMsg'] . '",
                    icon: "' . $_SESSION['sessionIcon'] . '",
                    showConfirmButton: true,
                    confirmButtonText: "ok"
                });
            </script>';
        unset($_SESSION['errorTitle']);
        unset($_SESSION['errorMsg']);
        unset($_SESSION['sessionMsg']);
        // unset($_SESSION['location']);
        unset($_SESSION['sessionIcon']);
    }
    ?>
    <!-- =========X============ Newsletter =========X============ -->
    <section class="newsletter">
        <div class="newsletter--header">
            <h3 class="bold">Subscribe to our weekly Newsletter!</h3>
        </div>
        <div class="newsletter--body">
            <p>Stay updated with our latest updates<i class="fas fa-arrow-right"></i><i class="fas fa-arrow-down"></i></p>
            <div class="newsletter--input">
                <form action="" method="post">
                    <input type="text" name="website" style="display:none">

                    <input type="text" name="subscribe_name" id="subscribe_name" placeholder="Name" required>
                    <input type="email" name="subscribe_email" id="subscribe_email" placeholder="Your email address" required>
                    <button type="submit" class="" name="btn_subscribe" id="btn_subscribe">
                        subscribe
                    </button>
                    <button type="submit" class="d-none" name="btn_success" id="btn_success">
                        <i class="fas fa-check"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
    <!-- =========X============ /Newsletter =========X============ -->
    <div class="quicklink--content">
        <div class="quicklink--links">
            <h3>Company</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="service">Our Service</a></li>
                <!-- <li><a href="about">About Us</a></li> -->
                <li><a href="community">Our Community</a></li>
                <li><a href="partner">Our Partners</a></li>
                <li><a href="invest-in-us">Investment</a></li>
                <li><a href="careers">Careers</a></li>
            </ul>
        </div>
        <div></div>
        <!-- <div class="quicklink--newsletter">
                    <h3>Newsletter</h3>
                    <p>Stay updated with our latest</p>
                    <form action="" method="post">
                        <div>
                            <input type="text" placeholder="Full name" required>
                            <input type="email" placeholder="Email address" required>
                            <button class="bg-primary text-white" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div> -->
        <div class="quicklink--contact">
            <h3>Contact</h3>
            <p> <i class="fas fa-map-marker-alt"> </i>
                No. 5b, Sokoto Road MTD Zaria, Kaduna State.
            </p>
            <p> <i class="fa-solid fa-phone"></i>+234 9050785803</p>
            <p> <i class="fas fa-envelope"></i>info@gleanagrong.com</p>
        </div>
        <div class="quicklink--social">
            <h3>Social Media</h3>
            <p>Connect with us on social media</p>
            <div class="text-gray">
                <a href="https://www.facebook.com/profile.php?id=61581844975932" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <!--<a href="#">-->
                    <i class="fab fa-instagram"></i>
                <!--</a>
                <a href="#">-->
                    <i class="fab fa-youtube"></i>
                <!--</a>-->
                <a href="https://x.com/GleanAgroNg" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/gleanagro-nigeria-ltd/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="move-up">
        <span>
            <i class="fas fa-arrow-circle-up fa-2x"></i>
        </span>
    </div>
</section>
<!-- =========X============ /Quicklinks =========X============ -->
<!-- ===================== Footer ===================== -->
<section class="footer text-center">
    <small>&copy <?php echo Date('Y'); ?>
        GleanAgro | Powered by <a href="https://www.an-nur-info-tech.com" target="_blank" class="text-secondary_custom">An-Nur-Info-Tech</a>
    </small>
</section>
<!-- =========X============ /Footer =========X============ -->