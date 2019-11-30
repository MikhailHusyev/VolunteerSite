<?php
// required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    include_once '../config/database.php';
    include_once '../models/event-model.php';

    $database = new Database();
    $db = $database->getConnection();

    $volunteer_item = new event($db);

    $Eid = isset($_GET['id']) ? $_GET['id'] : die();
    
    $volunteer_item->readOne($Eid);

    if($volunteer_item->event_name != null){
        echo json_encode($volunteer_item);

    }else{
        http_response_code(404);
     
        // tell the user no products found
        echo json_encode(array("message" => "No volunteer events found"));
    }
?>