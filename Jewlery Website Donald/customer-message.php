<!DOCTYPE html>
<html>
<head>
  <title>customer_message</title>
  </head>
<body lang="en" class="body">
<h3>Survey</h3> 
<?php
// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone_number = $_POST['number'];
    $email = $_POST['email'];
    $message = $_POST['message'];


// Database connection details
$servername="localhost";
$username="dah280";
$password="ihee9ieX";
$dbname="dah280";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    // Prepare and execute an SQL statement to insert data
    $sql = "INSERT INTO your_table_name (name, phone_number, email, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $phone_number, $email, $message);
    $stmt->execute();

    // Check for errors
if ($stmt->error) {
    echo "Error: " . $stmt->error;
} else {
    // Successful insertion
    echo "New record created.";
    header("Location: jewlery_web.html");
    exit();
}
    $stmt->close();
}

$conn->close();
?>

</body>
</html>