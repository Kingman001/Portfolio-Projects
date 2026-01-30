<?php
include_once('../database/Database.php');

if(session_status() == PHP_SESSION_NONE)
{
	session_start(); //start session if session not start
}

// Check if the required parameters are set
if (isset($_POST['alertValue'])) {
    $alertValue = $_POST['alertValue'];
    $email = $_SESSION['email'];

    $db = new Database();
    if ($alertValue == 0) //Change to 1 (Enable)
    {
        $db->query("UPDATE tbl_user SET login_alert=1 WHERE email = :email;");
        $db->bind(':email', $email);

        // Execute the query
        if ($db->execute()) {
            // Respond with success
            echo json_encode(['status' => 'success', 'message' => 'Record updated successfully']);
        } else {
            // Respond with error if something goes wrong
            echo json_encode(['status' => 'error', 'message' => 'Failed to updated the record']);
        }
    }
    else if ($alertValue == 1) //Change to 0 (Disable)
    {
        $db->query("UPDATE tbl_user SET login_alert=0 WHERE email = :email;");
        $db->bind(':email', $email);
        
        // Execute the query
        if ($db->execute()) {
            // Respond with success
            echo json_encode(['status' => 'success', 'message' => 'Record updated successfully']);
        } else {
            // Respond with error if something goes wrong
            echo json_encode(['status' => 'error', 'message' => 'Failed to updated the record']);
        }
    }


} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request. Missing parameters.']);
}
