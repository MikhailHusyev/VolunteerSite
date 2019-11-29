<?php
    include './config.php';
    include './wsdl.php';
    global $details;


        $conn = new mysqli($details['server_host'], $details['mysql_name'], $details['mysql_password'], $details['mysql_database']);
        $result = $conn->query("SELECT * FROM volunter");

        $num = $result->rowCount();
        if($num > 0 ){
            $data = array();
            $data["records"] = array();

            while($rs = $result->fetch(PDO::FETCH_ASSOC)){
                extract($row);

                $volunteer_item = array(
                    "Eid" => $Eid,
                    "event_name" => $event_name,
                    "date" => $date,
                    "event_address" => $event_address,
                    "event_description" => $event_description,
                    "fk_pid" => $fk_pid,
                    "fk_cid" => $fk_cid
                );
                array_push($data["records"], $volunteer_item);
            }

            http_response_code(200);
            echo json_encode($data);
        }
?>