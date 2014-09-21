<!DOCTYPE HTML>
<html lang = "en">

<head>
<meta charset = "UTF-8">
<link rel="stylesheet" type="text/css" href="main.css" />
</head>
<body onload="searchGeneric()">


<br>
<input type="button" value="Load Table" onclick="searchGeneric()" class = "classname">

<div id="txtHint"></div>
<br>
<br>

<form id="myForm" action="insert_record.php" method="post">

foodName:       <input type="text" name="productName" /><br />
foodType:  <select name="productType" onchange="showUser(this.value)">
<option value="">Food Type:</option>
<option value="Grain">Grain</option>
<option value="Fruit">Fruit</option>
<option value="Vegetables">Vegetables</option>
<option value="Canned">Canned</option>
</select><br />
ExpirationDate: <input type="text" name="ExpirationDate"  /><br />
Quantity:       <input type="text" name="WhatyouHave"  /><br />
<button id="sub" class = "classname">Insert</button>
</form>

<form id="myForm1" action="delete_record.php" method="post">
ID:             <input type="text" name="id1" /><br />
<button id="sub1" class = "classname">Delete</button>
</form>

<span id="result"></span>

<script src="jquery.js" type ="text/JavaScript"></script>
<script src="ryan1.js"  type ="text/JavaScript"></script>


<!-- 

 This is an example dropdown menu
<form>
<select name="users" onchange="showUser(this.value)">
<option value="">Select a person:</option>
<option value="1">Peter Griffin</option>
<option value="2">Lois Griffin</option>
<option value="3">Joseph Swanson</option>
<option value="4">Glenn Quagmire</option>
</select>
</form>

-->


</body>
</html>

