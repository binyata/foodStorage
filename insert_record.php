<?php
	
	$conn = mysql_connect('localhost', 'root', '');
	$db   = mysql_select_db('foodstorage');

	

	$productName     = $_POST['productName'];
	$productType     = $_POST['productType'];
	$ExpirationDate  = $_POST['ExpirationDate'];
	$WhatyouHave     = $_POST['WhatyouHave'];
	
	
	if (mysql_query("INSERT INTO storage VALUES('', '$productName', '$productType'
	, UTC_DATE(), '$ExpirationDate', '$WhatyouHave', '')")) {
		echo "Successfully Inserted";
	} else {
		echo "Failed";
	}
?>
