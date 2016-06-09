function enkripsiVigenereFile(){
    var plaintext = document.getElementById("outputenc").innerHTML; //nilainya diambil dari form plaintext-nya
    var cipher = ""; // menampung hasil enkripsi
    var key = document.getElementById("keyenc").value; //nilainya diambil dari form kunci-nya
    var indKeyCount = 0;
    
    for(j=0;j<plaintext.length;j++){ // plaintext diambil dari var plaintext
        if(cekAdaHurufVigenere(plaintext.substr(j,1))){ // untuk cekAdaHurufVigenere diambil dari function cekAdaHurufVigenere
            indHrfKey = indKeyCount % key.length; // indHrfKey dihasilkan dari var indKeyCount modolus var key

            hrfKey = key.substr(indHrfKey,1); // diambil dari nilai atasnya yang diubah ke string

            //memeriksa index key
            for(n=0;n<huruf.length;n++){ // huruf disini diambil dari var huruf
                if (huruf[n] == hrfKey.toLowerCase()) { // mengubah kata yang berada pada variable hrfKey menjadi karakter dengan huruf kecil
                    indKey = n;
                    ada = true;
                }
            }

            indKeyCount++;
        } else {
            indKey = 0; // nilai index kunci
        }

        cipher += enkripsiStringVigenere(plaintext.substr(j,1),indKey); // untuk enkripsiStringVigenere diambil dari function enkripsiStringVigenere
    }

    return cipher;
}

function dekripsiVigenereFile(){
    var ciphertext = document.getElementById("outputdec").innerHTML; //nilainya diambil dari form cipher-nya
    var plain = ""; // menampung hasil dekripsi
    var key = document.getElementById("keydec").value; //nilainya diambil dari form kunci-nya
    var indKeyCount = 0;
    
    for(j=0;j<ciphertext.length;j++){
        if(cekAdaHurufVigenere(ciphertext.substr(j,1))){ // untuk cekAdaHurufVigenere diambil dari function cekAdaHurufVigenere
            indHrfKey = indKeyCount % key.length; // indHrfKey dihasilkan dari var indKeyCount modolus var key

            hrfKey = key.substr(indHrfKey,1);

            //cek kunci index
            for(n=0;n<huruf.length;n++){
                if (huruf[n] == hrfKey.toLowerCase()) { // mengubah kata yang berada pada variable hrfKey menjadi karakter dengan huruf kecil
                    indKey = n;
                    ada = true;
                }
            }

            indKeyCount++;
        } else {
            indKey = 0;
        }

        plain += dekripsiStringVigenere(ciphertext.substr(j,1),indKey);// untuk dekripsiStringVigenere diambil dari function dekripsiStringVigenere
    }

    return plain;// nilai yang tampil di form hasil (plaintext) diambil dari var plain
}

//ambil data file
var openFileEnc = function(event) { //enkripsi
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        var node = document.getElementById('outputenc');
        node.className = "well";
        //hapus enter dengan spasi
        text = text.replace(/(\r\n|\n|\r)/gm," ");
        node.innerHTML = text; 
    };
    reader.readAsText(input.files[0]);
};

//ambil data file
var openFileDec = function(event) { //dekripsi
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        var node = document.getElementById('outputdec');
        node.className = "well";
        //hapus enter dengan spasi
        text = text.replace(/(\r\n|\n|\r)/gm," ");
        node.innerHTML = text; 
    };
    reader.readAsText(input.files[0]);
};