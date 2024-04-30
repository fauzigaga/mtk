function hitungLuas() {
    var panjang = parseFloat(document.querySelector('#panjang').value);
    var lebar = parseFloat(document.querySelector('#lebar').value);
    var luas = parseFloat(document.querySelector('#hasil').value);
    var caraPp = document.querySelector('.caraPp');
    var hasilOperasi = ''; //untuk menyimpan string 
    
  // Periksa apakah salah satu dari nilai panjang, lebar, atau luas tidak diisi ( (!isNaN) berarti nilainya diketahui,jika (isNaN) nilainya belum di ketahui dan itu yang akan di hitung) (&& artinya dan )
  if (!isNaN(panjang) && !isNaN(lebar) && isNaN(luas)) {
      var luas = panjang*lebar;
      document.querySelector('#hasil').value = luas
      //mengisi hasil operasi yang akan di tampilkan 
      hasilOperasi = `luas = ${panjang}×${lebar} 
      = ${luas}`;
    }
    else if (isNaN(panjang) && !isNaN(lebar) && !isNaN(luas)) {
      var panjang = luas/lebar;
      document.querySelector('#panjang').value = panjang;
      hasilOperasi = `P = ${luas}/${lebar} = ${panjang}`;
    }
    else if (!isNaN(panjang) && isNaN(lebar) && !isNaN(luas)) {
      var lebar = luas/panjang;
      document.querySelector('#lebar').value = lebar;
      hasilOperasi = `l = ${luas}/${panjang} = ${lebar}`;
    } else {
     alert('kosongkan satu kolom yang ingin di hitung, contoh ingin menghitung luas (maka isi panjang dan lebar) luasnya di kosongi');
     return; 
   }
    //menampilkan hasil operasi 
    document.querySelector('.hasil-p-Pp').textContent = hasilOperasi;
    
    caraPp.style.display = 'flex';
 }
 