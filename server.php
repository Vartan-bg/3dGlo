<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
sleep(3);
echo $_SERVER['REMOTE_ADDR'];
