<?php
header('Access-Control-Allow-Origin: *');
$data = ["hà nội", "đà nẵng", "hồ chí minh"];
echo json_encode($data);
exit();
