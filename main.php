<div class="row">
	<div class="col-md-12"> 
		<div class="panel panel-default">
			<div class="panel-body">
				<?php
					if(isset($_GET['hal']))
					{
						$namafile = $_GET['hal'].'.php';
						require_once($namafile);
					}
					else
					{
						require_once('home.php');
					}
				?>
			</div>
		</div>
	</div>
</div>