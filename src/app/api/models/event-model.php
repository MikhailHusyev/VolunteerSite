<?php
class Event{
    private $conn;

    public $Eid;
    public $charity_name;
    public $event_name;
    public $date;
    public $event_address;
    public $event_description;
    public $picture_location;

    public function __construct($db){
        $this->conn = $db;
    }

    function read(){

        $query = "SELECT 
                    Eid, charity_name, event_name, date, event_address, event_description, picture_location
                    FROM event JOIN charity ON event.fk_cid = charity.Cid
                    LEFT JOIN pictures ON event.fk_pid = pictures.Pid";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function readOne($Eid){

        $query = "SELECT 
                    charity_name, event_name, date, event_address, event_description, picture_location
                    FROM event JOIN charity ON event.fk_cid = charity.Cid
                    LEFT JOIN pictures ON event.fk_pid = pictures.Pid WHERE event.Eid = {$Eid}";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->Eid = $Eid;
        $this->charity_name = $row['charity_name'];
        $this->event_name = $row['event_name'];
        $this->date = $row['date'];
        $this->event_address = $row['event_address'];
        $this->event_description = $row['event_description'];
        $this->picture_location = $row['picture_location'];
    }

}
?>