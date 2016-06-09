// mendeklarasikan function cekAdaHurufVigenere(hrf)
function cekAdaHurufVigenere(hrf){
    var ada = false;// karna kosong diisi false
    for(n=0;n<huruf.length;n++){
        if (huruf[n] == hrf.toLowerCase()) { // mengubah kata yang berada pada variable hrf menjadi karakter dengan huruf kecil
            ada = true;
        }
    }
    return ada; // kembali ke "var ada"
}

// mendeklarasikan function enkripsiStringVigenere(x,key)
function enkripsiStringVigenere(x,key){
    var indexsekarang = 0; // index teks awal
    var indexseterusnya = 0; // index hasil
    var ada = false;// karna kosong diisi false

    for (i = 0; i < huruf.length; i++) {
        if (huruf[i] == x.toLowerCase()) { 
            indexsekarang = i; // variabel indexsekarang atau index teks awal nilainya sama dengan i maka nilai var ada adalah benar/true
            ada = true;
        }

        indexseterusnya = (parseInt(indexsekarang) + parseInt(key)) % 36; //untuk mengambil perhitungan algoritmanya, yaitu plaintext+key mod 36

    }

    if(!ada){
        return x;
    } else {
        return huruf[indexseterusnya];
    }

}

var huruf = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");

//mulai codingnya
// pendeklarasian variabel2
function enkripsiVigenere(){
    var plaintext = document.getElementById("plantext").value; //nilainya diambil dari form plaintext-nya
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

    document.getElementById("resultdec").value = cipher; // nilai yang tampil di form hasil (ciphertext) diambil dari var cipher
}

function dekripsiVigenere(){
    var ciphertext = document.getElementById("chiper").value; //nilainya diambil dari form cipher-nya
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

    document.getElementById("resultenc").value = plain;// nilai yang tampil di form hasil (plaintext) diambil dari var plain
}

function dekripsiStringVigenere(x,key){
    var indexsekarang = 0; // index teks awal
    var indexseterusnya = 0;// index hasil
    var ada = false; // karna kosong diisi false

    for (i = 0; i < huruf.length; i++) {
        if (huruf[i] == x.toLowerCase()) { // mengubah kata yang berada pada variable x menjadi karakter dengan huruf kecil
            indexsekarang = i;
            ada = true;
        }

        hitung = (parseInt(indexsekarang) - parseInt(key)); // nilai variabel hitung adalah pengurangan indexsekarang yang diubah ke int dengan key

        if(hitung<0){
            hitung += 36; // variabel hitung nilainya sama dengan 36
        }

        indexseterusnya = hitung % 36; // untuk var indexseterusnya atau index hasil = variabel hitung di modulus 36

    }

    if(!ada){
        return x;
    } else {
        return huruf[indexseterusnya];
    }
}