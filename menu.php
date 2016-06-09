<div class="row">
	<div class="col-md-12">
		<div class="navbar navbar-inverse">
		    <div class="navbar-header">
				<button data-target=".navbar-inverse-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="?hal=home" class="navbar-brand">Kriptografi</a>
			</div>
			<div class="navbar-collapse collapse navbar-inverse-collapse">
				<ul class="nav navbar-nav">
				<?php
					$menu  = ['endec' => 'Enkripsi Dekripsi','endecfile' => 'Enkripsi Dekripsi file .txt'];
					foreach ($menu as $href => $nama) {
						if((isset($_GET['hal']) && $_GET['hal'] == $href))
						{
							$class = 'class="active"';	
						}
						else
						{
							$class = '';
						}
						echo "<li $class><a href=?hal=$href>$nama</a></li>";
					}
				?>
				</ul>
			</div>
		</div>
	</div>
</div>