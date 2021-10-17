<?php

$data = file_get_contents('coba.json');
$calon = json_decode($data, true);

var_dump($calon);
echo $calon[0]["tutor"]["tutor1"];
