<?php
session_start();
require_once __DIR__ . '/backend/db.php';

// If not POST, send to login page
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: login.html');
    exit;
}

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

$errors = [];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}
if ($password === '') {
    $errors[] = 'Password is required.';
}

if ($errors) {
    header('Location: login.html?error=' . urlencode(implode(' ', $errors)) . '&email=' . urlencode($email));
    exit;
}

$stmt = $mysqli->prepare('SELECT id, name, email, password_hash FROM users WHERE email = ? LIMIT 1');
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$stmt->close();

if (!$user || !password_verify($password, $user['password_hash'])) {
    header('Location: login.html?error=' . urlencode('Invalid email or password.') . '&email=' . urlencode($email));
    exit;
}

// Success: set session and redirect to home
$_SESSION['user_id'] = (int)$user['id'];
$_SESSION['user_name'] = $user['name'];
$_SESSION['user_email'] = $user['email'];

header('Location: index.html');
exit;
