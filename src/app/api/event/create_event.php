<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
     
    include_once '../config/database.php';


    if($_SERVER["REQUEST_METHOD"] =="POST"){

        $database = new Database();
        $db = $database->getConnection();

        $data = json_decode(file_get_contents("php://input"));

        
        if(
            !empty($data->event_name) &&
            !empty($data->date) &&
            !empty($data->event_address) &&
            !empty($data->event_description) &&
            !empty($data->picture_location)
        ){

            $date = date("Y-m-d H:i:s", strtotime($data->date));

            $queryImage = "INSERT INTO pictures(picture_location) VALUES('{$data->picture_location}'); SELECT LAST_INSERT_ID();";
            
            $stmt = $db->prepare($queryImage);
            $stmt->execute();

            $pid = $db->lastInsertId();

            $queryEvent = "INSERT INTO event(event_name, date, event_address, event_description, fk_pid, fk_cid) VALUES('{$data->event_name}', '{$date}', '{$data->event_address}', '{$data->event_description}', {$pid}, 1)";

            echo $queryEvent;
            
            $stmt = $db->prepare($queryEvent);
            $stmt->execute();

            if($stmt){

                http_response_code(200);
            }else{
                http_response_code(404);
            }
        }
    }else{
        echo "Not enough data sent";
    }

?>
