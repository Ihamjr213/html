<?php
// Database connection details (replace with your own)
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
$stmt->bind_param("s", $email);

// Get the email from the form
$email = $_POST['email'];

// Execute the query
$stmt->execute();

// Close the statement and connection
$stmt->close();
$conn->close();

// Redirect back to the signup page with a success message
header("Location: index.html?success=1");
exit();
