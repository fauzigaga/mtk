function hitungSimir() {
    var a = parseFloat(document.querySelector('#a').value);
    var b = parseFloat(document.querySelector('#b').value);
    var c = parseFloat(document.querySelector('#c').value);
    var hasilHidden = document.querySelector('.cara');
    var hasilOperasiSgt = ''; //untuk menyimpan string 
 
    // Periksa apakah salah satu dari nilai a, b, atau c tidak diisi
    if (isNaN(a) && !isNaN(b) && !isNaN(c)) {
      // Hitung nilai a menggunakan rumus Pythagoras
      a = Math.sqrt(c*c - b*b);
      document.querySelector('#a').value = a;
      hasilOperasiSgt = `sisi a = (${c}×${c})-(${b}×${b}) = ${a}`;
    } else if (!isNaN(a) && isNaN(b) && !isNaN(c)) {
      // Hitung nilai b menggunakan rumus Pythagoras
      b = Math.sqrt(c*c - a*a);
      document.querySelector('#b').value = b;
      hasilOperasiSgt = `sisi b = (${c}×${c})-(${a}×${a}) = ${b}`;
    } else if (!isNaN(a) && !isNaN(b) && isNaN(c)) {
      // Hitung nilai c menggunakan rumus Pythagoras
      c = Math.sqrt(a*a + b*b);
      document.querySelector('#c').value = c;
      hasilOperasiSgt = `sisi c = (${a}×${a})+(${b}×${b}) = ${c}`;
    } else {
      alert('kosongkan satu kolom yang ingin di hitung, contoh ingin menghitung c (maka isi a dan b) c nya di kosongi');
      return;
    }
     document.querySelector('.hasil-p').textContent = hasilOperasiSgt;
     
     hasilHidden.style.display = 'flex';
 }