<!-- REQUIRED SCRIPTS -->
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>

<!-- PAGE PLUGINS -->
<!-- DataTables -->
<script src="plugins/datatables/jquery.dataTables.min.js"></script>
<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>


<script src="dist/js/bootbox.min.js"></script>

<script>
// Data table control
$(function () {
  $("#example1").DataTable({
    "responsive": true,
    "autoWidth": false,
  });
  $('#example2').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "responsive": true,
  });
});

// Delete control
$(document).on("click", "#delete", function(e) {
  e.preventDefault();
  
  let id = $(this).attr("data-id");
  let tblName = $(this).attr("data-table");
  
  bootbox.confirm("Do you really want to delete this data?", function(confirmed) {
    if (confirmed) {
      $.ajax({
          url: 'ajax/delete-data.php', // PHP file that processes the deletion
          type: 'POST',
          data: {
              id: id,
              tblName: tblName
          },
          success: function(response) {
              console.log(response);
              location.reload();
          },
          error: function(xhr, status, error) {
              console.log("An error occurred while deleting the data. Please try again.");
          }
      });
    }
  });
});
  
// Login alert enable/disable
$(document).on("change", "#login_alert", function(e){
  e.preventDefault();
  let alertValue = $(this).attr("data-id");
  $.ajax({
      url: 'ajax/security-setting.php', // PHP file that processes the deletion
      type: 'POST',
      data: {
        alertValue: alertValue,
      },
      success: function(response) {
        console.log(response);
        // location.reload();
      },
      error: function(xhr, status, error) {
        console.log("An error occurred while deleting the data. Please try again.");
      }
  });  
});

// logout control
$(document).on("click", "#logout", function(e){
  e.preventDefault();
  bootbox.confirm("Do you really want to end your session?", function(confirmed){
    if (confirmed){
      $.ajax({
        url: 'ajax/logout.php', // PHP file that destroys the session
        type: 'POST',
        success: function(response) {
          window.location.href = "/"; // Redirect after logout
        },
        error: function(xhr, status, error) {
          console.log("An error occurred while logging out. Please try again.");
        }
      });
    }
  });
});

</script>
</body>
</html>