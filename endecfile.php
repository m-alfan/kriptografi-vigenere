<div class="row">
	<div class="col-md-6">
	<h3>Encryption File</h3><hr>
		<form role="form" method="post" id="enkripsi" name="enkripsi">
			<div class="form-group">
				<label for="plantext">File Plain Text .txt</label>
				<input type="file" id="plantext" accept='text/plain' onchange='openFileEnc(event)'/>
			</div>
			<div class="form-group">
				<label for="keyenc">Key</label>
				<input class="form-control" id="keyenc" placeholder="Key"/>
			</div>
			<div class="form-action">
				<input type="button" class="btn btn-primary"  id="download_dec" value="Encryption"/>
				<input type="reset" class="btn btn-default" name="reset" id="reset" value="Clear" />
			</div>

			<hr>
			<div class="form-group">
				<div id="outputenc"></div>
			</div>
		</form>
	</div>
	<div class="col-md-6">
		<h3>Decryption File</h3><hr>
		<form role="form" method="post" id="dekripsi" name="dekripsi">
			<div class="form-group">
				<label for="chiper">File Chiper Text .txt</label>
				<input type="file" id="chiper" accept='text/plain' onchange='openFileDec(event)'/>
			</div>
			<div class="form-group">
				<label for="keydec">Key</label>
				<input class="form-control" id="keydec" placeholder="Key" />
			</div>
			<div class="form-action">
				<input type="button" class="btn btn-primary"  id="download_enc" value="Decryption"/>
				<input type="reset" class="btn btn-default" name="reset" id="reset" value="Clear" />
			</div>

			<hr>
			<div class="form-group">
				<div id="outputdec"></div>
			</div>
		</form>
	</div>
</div>