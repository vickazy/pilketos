<?php  

require_once '../../func/Database.php';
require_once '../../func/Admin.php';

$nama = $_POST['nama'];
$user = trim($_POST['user']);
$pass = trim($_POST['pass']);
$mail = trim($_POST['mail']);

if ( $_POST['type'] == 'insert' ) {

	if (adminTambah($nama, $user, $pass, $mail)) {
		ob_start();
	  include "admin-view.php";
	  $html = ob_get_contents();
	  ob_end_clean();
	  
	  $response = array(
		'status'=>'sukses',
		'html'=>$html
	  );
	}else{
		$response = array(
		'status'=>'gagal'
	  );
	}

}

echo json_encode($response);
?>