<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>E - Pilketos</title>
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/styles2.css">
	<style>
		.row{
			margin-top: 10vh;
		}
	</style>
</head>
<body id="body">
	
<nav class="navbar navbar-inverse navbar-fixed-top nav-custom" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#"><div  id="brand">E-Pilketos</div></a>
			<ul id="menu" class="nav navbar-nav navbar-right">
				<li>
					<img src="assets/img/user-shape.png" alt="" id="user_shape">
				</li>
				<li style="margin: 0 10px;">
					<b id="slmt">Selamat Datang</b><br>
					<i id="nm"">Ahmad Fauzi</i><br>
					<i id="nm">12 TKJ</i>
				</li>
			</ul>
		</div>
	</div><!-- /.container-fluid -->
</nav>

<div class="container">

	<div class="row">

		<div class="col-xs-12 col-md-6">
			<div class="kiri">
				<img src="assets/img/kpo.png" id="kpo" class="img-responsive" alt="">
				<p class="">
					<u>Cara Memilih</u><br>
					Masukan Nama dan NIS yang sudah ditentukan untuk melakukan pemilihan Ketua OSIS. 
					Pilih dengan cara mengklik tombol pilih.
				</p>
			</div>
		</div>
		<div class="col-xs-12 col-md-6">
			<div class="kanan">
				<h1> Selamat datang di E-Pilketos </h1>
				<p>Kita satukan tekad untuk Pemilu yag Luber dan Jurdil</p>
				<div class="login">
					<form action="" method="post">
						<div class="form-group">
							<label for="username">Nama</label>
							<input type="text" name="username" class="form-control" placeholder="Nama" autofocus="">
						</div>
						<div class="form-group">
							<label for="password">NIS/Password</label>
							<input type="password" name="password" class="form-control" placeholder="NIS/Password">
						</div>
						<input type="submit" id="primary" name="login" class="btn btn-default" value="Login">
					</form>
				</div>
			</div>
		</div>

	</div>
	
	<div class="row">

		<div class="col-xs-12 col-md-6 col-lg-3">
			<div class="panel panel-default">
				<center>
					<div class="panel-body">
						<img src="assets/img/foto.jpg" class="img-responsive" alt="">
						<b>1. bebas</b><p class="text-mutted">zgouerjkg</p>
					</div>
					<div class="panel-footer">
						<a data-toggle="modal" href="#detail1" class="btn btn-info btn-sm">Detail</a>
						<a href="?p=edit_calon&amp;id=1" class="btn btn-primary btn-sm">Edit</a>
						<a href="?p=del_calon&amp;id=1&amp;f=../assets/img/calon/profil.jpg" class="btn btn-danger btn-sm">Hapus</a>
					</div>
				</center>
			</div>
		</div>
		<div class="col-xs-12 col-md-6 col-lg-3">
			<div class="panel panel-default">
				<center>
					<div class="panel-body">
						<img src="assets/img/foto.jpg" class="img-responsive" alt="">
						<b>1. bebas</b><p class="text-mutted">zgouerjkg</p>
					</div>
					<div class="panel-footer">
						<a data-toggle="modal" href="#detail1" class="btn btn-info btn-sm">Detail</a>
						<a href="?p=edit_calon&amp;id=1" class="btn btn-primary btn-sm">Edit</a>
						<a href="?p=del_calon&amp;id=1&amp;f=../assets/img/calon/profil.jpg" class="btn btn-danger btn-sm">Hapus</a>
					</div>
				</center>
			</div>
		</div>
		<div class="col-xs-12 col-md-6 col-lg-3">
			<div class="panel panel-default">
				<center>
					<div class="panel-body">
						<img src="assets/img/foto.jpg" class="img-responsive" alt="">
						<b>1. bebas</b><p class="text-mutted">zgouerjkg</p>
					</div>
					<div class="panel-footer">
						<a data-toggle="modal" href="#detail1" class="btn btn-info btn-sm">Detail</a>
						<a href="?p=edit_calon&amp;id=1" class="btn btn-primary btn-sm">Edit</a>
						<a href="?p=del_calon&amp;id=1&amp;f=../assets/img/calon/profil.jpg" class="btn btn-danger btn-sm">Hapus</a>
					</div>
				</center>
			</div>
		</div>
		<div class="col-xs-12 col-md-6 col-lg-3">
			<div class="panel panel-default">
				<center>
					<div class="panel-body">
						<img src="assets/img/foto.jpg" class="img-responsive" alt="">
						<b>1. bebas</b><p class="text-mutted">zgouerjkg</p>
					</div>
					<div class="panel-footer">
						<a data-toggle="modal" href="#detail1" class="btn btn-info btn-sm">Detail</a>
						<a href="#edit" class="btn btn-primary btn-sm" data-toggle="collapse">Edit</a>
						<a href="?p=del_calon&amp;id=1&amp;f=../assets/img/calon/profil.jpg" class="btn btn-danger btn-sm">Hapus</a>
					</div>
				</center>
			</div>
		</div>
			
	</div>

</div>

<div class="footer">
	<div class="container">
		<span>Copyright &copy; 2017 . Karya Saya</span>
	</div>
</div>

	<script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>

</body>
</html>