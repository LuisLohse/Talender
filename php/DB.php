<?php

$servername = "database-5002028781.ud-webspace.de";
$username = "dbu1022673";
$password = ""; // REDACTED

try {
  $conn = new PDO("mysql:host=$servername;dbname=dbs1652656", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
}

?>
