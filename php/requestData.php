<?php

include "DB.php";

$user = $_GET["username"];

$sth = $conn->prepare("SELECT * FROM `User` WHERE `UserName` = '$user'");
$sth->execute();
$result = $sth->fetch();
echo $result["TaskJSON"];
?>
