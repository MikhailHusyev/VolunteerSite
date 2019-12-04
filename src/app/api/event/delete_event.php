<?php
     header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
     
    include_once '../config/database.php';


    if($_SERVER["REQUEST_METHOD"] =="DELETE"){

        $database = new Database();
        $db = $database->getConnection();

        $data = json_decode(file_get_contents("php://input"));

        
        if(isset($data->id)){

            $Eid = $data->id;    

            $queryPictureId = "SELECT fk_pid FROM event WHERE Eid = {$Eid}";
            
            $stmt = $db->prepare($queryPictureId);
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $pid = $row['fk_pid'];

            $queryDeleteEvent = "DELETE FROM event WHERE Eid = {$Eid}";

            $stmt = $db->prepare($queryDeleteEvent);
            $stmt->execute();

            if($pid){
                $queryDeleteImage = "DELETE FROM pictures WHERE Pid = {$pid}";
                $stmt = $db->prepare($queryDeleteImage);
                $stmt->execute();
            }


            if($stmt){

                http_response_code(200);
            }else{
                http_response_code(404);
            }
        }
    }else{
        echo "Not correct request";
    }

?>
