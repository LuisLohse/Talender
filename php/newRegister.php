<?php
  include "DB.php";

  $username = $_GET["username"];
  $password = $_GET["password"];
  $hash = hash("sha256", $password);
  echo "$username/$password --> $hash";

  $sth = $conn->prepare("INSERT INTO `User` (`UserName`, `UserPassHash`) VALUES ('$username', '$hash')");
  $sth->execute();
  $result = $sth->fetch();


 ?>
