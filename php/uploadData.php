<?php

include "DB.php";


$data = $_GET["data"];
$username = $_GET["username"];

$sth = $conn->prepare("UPDATE `User` SET `TaskJSON` = $data WHERE `UserName` = '$username'");
$sth->execute();
$result = $sth->fetch();
?>
