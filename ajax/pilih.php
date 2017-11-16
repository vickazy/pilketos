<?php  
session_start();

require_once '../func/Database.php';
require_once '../func/Calon.php';
require_once '../func/Pilih.php';

if ($_POST['type'] == 'login') {

	$nama = @$_POST['nama'];
	$nis  = trim(@$_POST['nis']);

	if ( LoginUser($nama, $nis) ) {
		$response = array(
	    'status'=>'sukses'
	  );
	  $_SESSION['user'] = $nama;
	}else{
		$response = array(
	    'status'=>'gagal'
	  );
	}

}else if($_POST['type'] == 'pilih'){

	$sesi = $_SESSION['user'];
	$id   = $_POST['id'];

	if(calonTampil()){
		$suara = mysqli_fetch_assoc(calonTampil())['suara']+1;
		if(TambahSuara($suara, $id)){
			if(UbahStatus($sesi)){
				Logout();

				$response = array(
			    'status'=>'sukses'
			  );
			}
		}
	}else{
		$response = array(
	    'status'=>'gagal'
	  );
	}

}
echo json_encode($response);
?>