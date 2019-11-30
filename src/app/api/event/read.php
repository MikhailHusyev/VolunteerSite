<?php
// required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once '../config/database.php';
    include_once '../models/event-model.php';

    $database = new Database();
    $db = $database->getConnection();

    $volunteer_item = new event($db);
    
    $stmt = $volunteer_item->read();
    
    $num = $stmt->rowCount();

    if($num > 0){
        $volunteers_arr = array();
        

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){

            extract($row);

            $volunteer_item = array(
                "Eid" => $Eid,
                "charity_name" => $charity_name,
                "event_name" => $event_name,
                "date" => $date,
                "event_address" => $event_address,
                "event_description" => $event_description,
                "picture_location" => $picture_location,
            );

            array_push($volunteers_arr, $volunteer_item);
        }
        // set response code - 200 OK
        http_response_code(200);
    
        // show products data in json format
        echo json_encode($volunteers_arr);

    }else{
        http_response_code(404);
     
        // tell the user no products found
        echo json_encode(array("message" => "No volunteer events found"));
    }
?>