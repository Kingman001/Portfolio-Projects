<?php
include_once('../database/Database.php');

// Check if the required parameters are set
if (isset($_POST['id']) && isset($_POST['tblName'])) {
    $id = $_POST['id'];
    $tblName = $_POST['tblName'];

    $db = new Database();

    // Create a query to delete the record
    $db->query("DELETE FROM $tblName WHERE id = $id LIMIT 1;");
    
    // Execute the query
    if ($db->execute()) {
        // Respond with success
        echo json_encode(['status' => 'success', 'message' => 'Record deleted successfully']);
    } else {
        // Respond with error if something goes wrong
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete the record']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request. Missing parameters.']);
}
