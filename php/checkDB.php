<?php
 include "DB.php";

 $user = $_GET["username"];
 $password = $_GET["password"];
 $hash = hash("sha256", $password);

 $sth = $conn->prepare("SELECT * FROM `User` WHERE `UserName` = '$user'");
 $sth->execute();
 $result = $sth->fetch();

 if ($result == false) {
   echo "doesnt exist";
 }else {
   $sth2 = $conn->prepare("SELECT * FROM `User` WHERE `UserName` = '$user' AND `UserPassHash` = '$hash'");
   $sth2->execute();
   $result2 = $sth2->fetch();
   if ($result2 == false) {
     echo "wrong password";
   }else {
     echo "access granted";
   }
 }
 ?>
