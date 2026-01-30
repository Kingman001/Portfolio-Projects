<?php
define('TITLE',   'Investor');

include_once("./includes/header.php");
    include_once("./includes/navbar.php");
    include_once("./includes/sidebar.php");
  ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
  <?php
      define('PAGE', 'Investor');
      include_once("./includes/content-header.php");
    ?>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All investor data</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Names</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Name of Org.</th>
                    <th>Type of investment</th>
                    <th>Type of investor</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <?php 
                    $db = new Database();
                    $db->query("SELECT * FROM tbl_investment_data;");
                    $db->execute();
                    $numContacts = $db->rowCount(); 
                    if ($numContacts > 0)
                    {
                      $count = 1;
                      $rec = $db->resultset();
                      foreach($rec as $item)
                      {
                      ?>
                        <tr>
                          <td><?php echo $count; ?></td>
                          <td><?php echo $item->fullName; ?></td>
                          <td><?php echo $item->email; ?></td>
                          <td><?php echo $item->mobileNo; ?></td>
                          <td><?php echo $item->nameOfOrganization; ?></td>
                          <td><?php echo $item->typeOfInvestment; ?></td>
                          <td><?php echo $item->typeOfInvestor; ?></td>
                          <td><?php echo $item->created_at; ?></td>
                          <td>
                            <!-- <a href="#" class="btn btn-primary"><i class="nav-icon fas fa-edit"></i></a> -->
                            <a href="#" id="delete" data-table="tbl_investment_data" data-id="<?php echo $item->id; ?>" class="btn btn-danger" ><i class="nav-icon fas fa-trash"></i></a>
                          </td>
                        </tr>    
                        <?php
                        $count++;
                      }

                    } 
                    else 
                    {
                  ?> 
                      <tr class="text-center">
                        <td colspan="9">Empty record returned!</td>
                      </tr>
                  <?php
                    }
                  ?> 
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Names</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Name of Org.</th>
                    <th>Type of investment</th>
                    <th>Type of investor</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

  <?php
    include_once("./includes/footer.php");
include_once("./includes/script.php");
?>