// invers matriks 3×3 ribet
function invRibet() {
    let baris12 = document.querySelector('#nilai1').value;
    let baris23 = document.querySelector('#nilai2').value;
    let baris34 = document.querySelector('#nilai3').value;
    let baris45 = document.querySelector('#nilai4').value;
    let baris56 = document.querySelector('#nilai5').value;
    let baris67 = document.querySelector('#nilai6').value;
    let baris78 = document.querySelector('#nilai7').value;
    let baris89 = document.querySelector('#nilai8').value;
    let baris90 = document.querySelector('#nilai9').value;
    const caraRibet = document.querySelector('.inversCara');
    let inv = '';
    let inv1 = '';
    let inv2 = '';
    let inv3 = '';
    let inv4 = '';
    let inv5 = '';
    let inv6 = '';
    let inv7 = '';
    let inv8 = '';
    if (!isNaN(baris12) && !isNaN(baris23) && !isNaN(baris34) && !isNaN(baris45) && !isNaN(baris56) && !isNaN(baris67) && !isNaN(baris78) && !isNaN(baris89) && !isNaN(baris90)) {
      
      let det = 1/(((baris12*baris56*baris90) + (baris23*baris67*baris78) + (baris34*baris45*baris89)) - ((baris23*baris45*baris90)+(baris12*baris67*baris89)+(baris34*baris56*baris78))) ;
      //baris1
      inv = ((baris56*baris90)-(baris67*baris89))*det;
      inv1 = (-((baris23*baris90)-(baris34*baris89)))*det;
      inv2 = ((baris23*baris67)-(baris34*baris56))*det;
      //baris2
      inv3 = (-((baris45*baris90)-(baris67*baris78)))*det;
      inv4 = ((baris12*baris90)-(baris34*baris78))*det;
      inv5 = (-((baris12*baris67)-(baris34*baris45)))*det;
      //baris3
      inv6 = ((baris45*baris89)-(baris56*baris78))*det;
      inv7 = (-((baris12*baris89)-(baris23*baris78)))*det;
      inv8 = ((baris12*baris56)-(baris23*baris45))*det;
      
      
    document.querySelector('.hasil-p-Pp0').textContent = "matriks nya:";
    document.querySelector('.hasil-p-Pp12').textContent = `${baris12} ${baris23} ${baris34}`;
    document.querySelector('.hasil-p-Pp23').textContent = `${baris45} ${baris56} ${baris67}`;
    document.querySelector('.hasil-p-Pp34').textContent = `${baris78} ${baris89} ${baris90}`;
    document.querySelector('.hasil-p-Pp45').textContent = "invers matriks:";
    document.querySelector('.hasil-p-Pp56').textContent = `|${inv} ,     ${inv1}     , ${inv2}|` ;
    document.querySelector('.hasil-p-Pp67').textContent = `|${inv3} ,     ${inv4}   ,   ${inv5}|`;
    document.querySelector('.hasil-p-Pp78').textContent = `|${inv6}  ,    ${inv7}    ,  ${inv8}|`;
    // Menampilkan elemen dengan id 'cara'
    caraRibet.style.display = 'flex';
    }
    else {
      alert('masukkan nilai ')
    }
}

//invers matriks 2*2
function hitungInvMat() {
    let baris11 = document.querySelector('#baris11').value;
    let baris22 = document.querySelector('#baris22').value;
    let baris33 = document.querySelector('#baris33').value;
    let baris44 = document.querySelector('#baris44').value;
    let cara2 = document.querySelector('.caraInv2');
    let inv = '';
    let inv1 = '';
    let inv2 = '';
    let inv3 = '';
    
    if (!isNaN(baris11) && !isNaN(baris22) && !isNaN(baris33) && !isNaN(baris44)) {
     let det = (baris11*baris44)-(baris22*baris33);
     inv = baris44/det;
     inv1 = -baris22/det;
     inv2 = -baris33/det;
     inv3 = baris11/det;
     
    document.querySelector('.hasil-p-Ppp').textContent = "matriks nya:";
    document.querySelector('.hasil-p-Pp11').textContent = `${baris11} ${baris22}`;
    document.querySelector('.hasil-p-Pp22').textContent = `${baris33} ${baris44}`;
    document.querySelector('.hasil-p-Pp33').textContent = "invers matriks:";
    document.querySelector('.hasil-p-Pp44').textContent = `${inv} ${inv1}`;
    document.querySelector('.hasil-p-Pp55').textContent = `${inv2} ${inv3}`;
    // Menampilkan elemen dengan id 'cara'
    cara2.style.display = 'flex';
    } else {
      alert('maaf masukkan angka ya 😁')
    } 
    
  }