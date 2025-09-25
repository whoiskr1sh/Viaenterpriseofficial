<?php
session_start();
require_once __DIR__ . '/backend/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: register.html');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';
$confirm = $_POST['confirm'] ?? '';

$errors = [];
if ($name === '' || mb_strlen($name) < 2) {
    $errors[] = 'Please enter your full name (min 2 characters).';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}
if (strlen($password) < 8 || !preg_match('/[A-Z]/', $password) || !preg_match('/[0-9]/', $password)) {
    $errors[] = 'Password must be at least 8 characters and include 1 uppercase letter and 1 number.';
}
if ($password !== $confirm) {
    $errors[] = 'Passwords do not match.';
}

if ($errors) {
    header('Location: register.html?error=' . urlencode(implode(' ', $errors)) . '&name=' . urlencode($name) . '&email=' . urlencode($email));
    exit;
}

// Check if email is taken
$stmt = $mysqli->prepare('SELECT id FROM users WHERE email = ? LIMIT 1');
$stmt->bind_param('s', $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    $stmt->close();
    header('Location: register.html?error=' . urlencode('An account with this email already exists.') . '&name=' . urlencode($name) . '&email=' . urlencode($email));
    exit;
}
$stmt->close();

$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $mysqli->prepare('INSERT INTO users (name, email, password_hash, created_at) VALUES (?, ?, ?, NOW())');
$stmt->bind_param('sss', $name, $email, $hash);
if (!$stmt->execute()) {
    $stmt->close();
    header('Location: register.html?error=' . urlencode('Failed to create account. Please try again.') . '&name=' . urlencode($name) . '&email=' . urlencode($email));
    exit;
}

$user_id = $stmt->insert_id;
$stmt->close();

// Auto-login
$_SESSION['user_id'] = (int)$user_id;
$_SESSION['user_name'] = $name;
$_SESSION['user_email'] = $email;

header('Location: index.html');
exit;
