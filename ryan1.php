<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','foodstorage');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM storage";
$result = mysqli_query($con,$sql);

echo "<table class = \"container\">
<thead>
<tr>
<th>id</th>
<th>Product Name</th>
<th>Product Type</th>
<th>Created Date</th>
<th>Expiration Date</th>
<th>What you Have</th>
</tr>
</thead>
<tbody>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['id'] . "</td>";
  echo "<td>" . $row['productName'] . "</td>";
  echo "<td>" . $row['productType'] . "</td>";
  echo "<td>" . $row['createdDate'] . "</td>";
  echo "<td>" . $row['expirationDate'] . "</td>";
  echo "<td>" . $row['WhatyouHave'] . "</td>";
  echo "</tr>";
}
echo "</tbody>
</table>";

mysqli_close($con);

//  WHERE id = '".$q."'
?>

