<?php
// Replace these values with the credentials from your Hostinger control panel.
$db_host = "localhost";
$db_name = "your_database_name";
$db_user = "your_database_user";
$db_password = "your_database_password";

$conn = new mysqli($db_host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare an SQL statement to insert the form data into the "contacts" table.
$sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $subject, $message);

// Execute the SQL statement and check for errors.
if ($stmt->execute() === false) {
    die("Error: " . $stmt->error);
}

// Close the database connection.
$stmt->close();
$conn->close();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // TODO: Connect to the database and store the data.
    // TODO: Send a response or confirmation email if necessary.

    // Redirect to a "thank you" page or display a success message.
    header("Location: thank-you.html");
    exit;
} else {
    // Redirect to the main page if this script is accessed directly.
    header("Location: index.html");
    exit;
}
?>