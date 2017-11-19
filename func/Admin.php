<?php  

// Tambah Admin
function adminTambah($nama, $user, $pass, $mail){
	global $mysqli;

	$pass = password_hash($pass, PASSWORD_DEFAULT);
	$sql = $mysqli->prepare("INSERT INTO admin (nama, username, password, email) VALUES (?, ?, ?, ?)");
	$sql->bind_param('ssss', $nama, $user, $pass, $mail);

	return $sql->execute();
}

// Tampil admin
function adminTampil(){
	global $mysqli;

	$query = "SELECT * FROM admin";
	$result = $mysqli->query($query);

	return $result;
}

?>