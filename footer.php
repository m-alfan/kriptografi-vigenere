				<div class="row">
					<div class="col-md-12">
						<hr>
						<center>
							Copyright &copy; <?= date('Y'); ?> by Alfan.<br/>
							All Rights Reserved.
						</center>
					</div>
				</div>
			</div>
		</div>
	</div>

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.generateFile.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/endec.js"></script>
    <script src="js/endecfile.js"></script>
    <script type="text/javascript">
		$(document).ready(function(){

		    $('#download_dec').click(function(e){

		        $.generateFile({
		            filename    : 'hasil_enc.txt',
		            content     : enkripsiVigenereFile(),
		            script      : 'download.php'
		        });

		        e.preventDefault();
		    });

		    $('#download_enc').click(function(e){

		        $.generateFile({
		            filename    : 'hasil_dec.txt',
		            content     : dekripsiVigenereFile(),
		            script      : 'download.php'
		        });

		        e.preventDefault();
		    });

		});
    </script>
  </body>
</html>