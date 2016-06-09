<div class="row">
	<div class="col-md-6">
	<h3>Encryption</h3><hr>
		<form role="form" method="post" id="enkripsi" name="enkripsi" enctype="multipart/form-data">
			<div class="form-group">
				<label for="plantext">Plain Text</label>
				<input class="form-control" id="plantext" placeholder="Plain Text"/>
			</div>
			<div class="form-group">
				<label for="keyenc">Key</label>
				<input class="form-control" id="keyenc" placeholder="Key"/>
			</div>
			<div class="form-action">
				<input type="button" class="btn btn-primary"  value="Encryption" onClick="enkripsiVigenere()"/>
				<input type="reset" class="btn btn-default" name="reset" id="reset" value="Clear" />
			</div>

			<hr>
			<div class="form-group">
				<label for="resultdec">Result </label>
				<input class="form-control" id="resultdec"/>
			</div>
		</form>
	</div>
	<div class="col-md-6">
		<h3>Decryption</h3><hr>
		<form role="form" method="post" id="dekripsi" name="dekripsi">
			<div class="form-group">
				<label for="chiper">Chiper Text</label>
				<input class="form-control" id="chiper" placeholder="Chiper Text" />
			</div>
			<div class="form-group">
				<label for="keydec">Key</label>
				<input class="form-control" id="keydec" placeholder="Key" />
			</div>
			<div class="form-action">
				<input type="button" class="btn btn-primary"  value="Decryption" onClick="dekripsiVigenere()"/>
				<input type="reset" class="btn btn-default" name="reset" id="reset" value="Clear" />
			</div>

			<hr>
			<div class="form-group">
				<label for="resultenc">Result </label>
				<input class="form-control" id="resultenc"/>
			</div>
		</form>
	</div>
</div>