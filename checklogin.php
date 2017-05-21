<?php 

include("includes/config.php");



$mail=$_GET['mail'];
$pass=$_GET['pass'];
$enpass=base64_encode($pass);


$sql= mysql_query("SELECT * FROM users WHERE email='$mail' AND password='$enpass' ");
$result=mysql_fetch_assoc($sql);

if ($result) {
$uid=$result['uid'];
header("Location: video.php?uid=".$uid);
}
else{
	echo "fail";
}

?>