<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'text' => 'We use cookies on our website to improve its functionality and to enhance your user experience. We also use cookies for analytics. If you continue to browse this website, we will assume you agree that we can place cookies on your device. If you would like to, you can change your cookie options at any time.',
    'button_agree' => 'I agree',
    'button_disagree' => 'Close',
];

echo json_encode($response);
