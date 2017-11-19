<?php
foreach (adminTampil() as $data) {
?>
<li>
	<a href="javascript:void(0)">
	  <i class="menu-icon fa fa-user bg-red"></i>

	  <div class="menu-info">
	    <h4 class="control-sidebar-subheading"><?=$data['nama']; ?></h4>

	    <p><?=$data['email']; ?></p>
	  </div>
	</a>
</li>
<?php } ?>