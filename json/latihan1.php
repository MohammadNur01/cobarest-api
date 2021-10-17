<?php

// $mahasiswa = [
//   [
//     "nama" => "Ahmad Jailani",
//     "nip" => "323121",
//     "jurusan" => "Ti"
//   ],
//   [
//     "nama" => "Ahmad Jailani",
//     "nip" => "323121",
//     "jurusan" => "Ti"
//   ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM  gunung');
$db->execute();
$gunung = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($gunung);
echo $data;
