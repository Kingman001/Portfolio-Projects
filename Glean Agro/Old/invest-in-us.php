<?php
define('TITLE', 'Invest in Us | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
include("./code.php");

function getTypeOfInvestor()
{
    $db = new Database();

    echo "<select name='typeOfInvestor'  required>";
    echo "<option value=''>Select...</option>";
    $db->query("SELECT * FROM tbl_investor;");
    if ($db->execute()) {
        if ($db->rowCount() > 0) {
            $row = $db->resultset();
            foreach ($row as $data) {
                echo "<option value='$data->investor_list'>$data->investor_list</option>";
            }
        } else {
            echo "<option value=''>No record found</option>";
        }
    }
    echo "</select>";
    $db->Disconect();
}
function getTypeOfInvestment()
{
    $db = new Database();

    echo "<select name='typeOfInvestment' required>";
    echo "<option value=''>Select...</option>";

    $db->query("SELECT * FROM tbl_investment;");
    if ($db->execute()) {
        if ($db->rowCount() > 0) {
            $row = $db->resultset();
            foreach ($row as $data) {
                echo "<option value='$data->investment_list'> $data->investment_list </option>";
            }
        } else {
            echo "<option value=''>No record found</option>";
        }
    }
    echo "</select>";
    $db->Disconect();
}
?>
<!-- ===================== Main site section ===================== -->
<main>
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
    <!-- =========X============ Investment Form =========X============ -->
    <section class="investment mt-1">
        <form action="invest-in-us" method="post">
            <div class="investment--content">
                <?php $_SESSION['form_start'] = time(); ?>
                
                <input type="text" name="website" style="display:none">

                <div class="investment--header mt-1">
                    <h3 class="bold text-primary_custom">Invest in Our Impact Journey Form</h3>
                </div>
                <div class="investment--body">
                    <div class="form-group">
                        <label for="">* Email address</label>
                        <input type="email" placeholder="Email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="">* Full name</label>
                        <input type="text" placeholder="Full name" name="fullName" required>
                    </div>
                    <div class="form-group">
                        <label for="">* Phone number</label>
                        <input type="number" placeholder="Phone no." name="mobileNo" required>
                    </div>
                    <div class="form-group">
                        <label for="">* Name of Organization</label>
                        <input type="text" placeholder="Organization" name="nameOfOrganization" required>
                    </div>
                    <div class="form-group">
                        <label for="">* Type of investment</label>
                        <!-- <select name="typeOfInvestment" id="" required>
                            <option value="">Select...</option>
                        </select> -->
                        <?php getTypeOfInvestment(); ?>
                    </div>
                    <div class="form-group">
                        <label for="">* Type of investor</label>
                        <!-- <select name="typeOfInvestor" id="" required>
                            <option value="">Select...</option>
                        </select> -->
                        <?php getTypeOfInvestor(); ?>
                    </div>
                    <div class="form-group">
                        <button type="submit" name="btn_invest">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </section>
    <!-- =========X============ /Investment Form =========X============ -->
    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>