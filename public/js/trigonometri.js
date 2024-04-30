// finction trigonometri
function hitungSudutIstime() {
    var sinCosTan = document.querySelector('#sinCosTan').value;
    var derajat = document.querySelector('#derajat').value;
    var sudutInput = document.querySelector('#sudutIstimewa');
    var caraTri = document.querySelector('.caraTri');
    var operasiTri = '';
    var hasilTri = '';
  
  //selector derajat dan kuadran 
    if (!isNaN(derajat)) {
      var kuadran = '';
      var deg = '';
      var hasilSdt1 = '';
      var hasilSdt2 = '';
      var hasilSdt3 = '';
    //selector derajat negatif/positif 
      if ((derajat >= -1 && derajat < 91) || (derajat>=-90 && derajat<0)) {
        kuadran = 1;
        deg = derajat - 0;
      } else if ((derajat >= 90 && derajat < 181) || (derajat >= -180 && derajat < -90)) {
      kuadran = 2;
      //seleksi derajat negatif/positif 
      if (derajat >= 90) {
          deg = 180 - derajat;
      } else if (derajat >= -180 && derajat < -91) {
          deg = Math.abs(derajat) - 180;// Menggunakan derajat tanpa nilai mutlak (Math.abs)
      }
    }else if ((derajat >= 180 && derajat < 271)  || (derajat >= -270 && derajat < -181)){
        kuadran = 3;
    //seleksi derajat negatif/positif 
            if (derajat >= 180) {
              deg = derajat -180;
            } else if (derajat >= -270 && derajat < -181) {
              deg = 180 - Math.abs(derajat);//math.abs mengubah - menjadi +, atau mengubah menjadi default 
            }
      } else if ((derajat >= 270 && derajat < 361) || (derajat >= -360 && derajat < -271)) {
        kuadran = 4;
       //seleksi derajat negatif/positif 
            if (derajat >= 270) {
              deg = 360 - derajat;
            } else if (derajat >= -360 && derajat < -271) {
              deg = Math.abs(derajat) - 360;
      }
      }
  // selector untuk hitung sin/cos/tan
      if (sinCosTan.trim().toLowerCase() === 'sin' || sinCosTan.trim().toLowerCase() === 'sin ') {
        hasilSdt1 = hitungSin(deg, kuadran);
        sudutInput.value = hasilSdt1;
       operasiTri = `sin${derajat}°=${
         //seleksi masuk kuadran berapa 
         (kuadran === 1) ? `${derajat} - 0 `:
         (kuadran === 2) ?
       // seleksi derajat positif/negatif 
         (derajat >= 90) ? `180 - ${derajat}` :
         (derajat < -90) ? `-180 -( ${derajat})` :
                '' : // string ' ' supaya tidak eror
         (kuadran === 3) ?
         // seleksi derajat positif/negatif 
         (derajat >= 180) ? `${derajat} -180` :
         (derajat < -180) ? `180${derajat}` :
                '' :
         (kuadran === 4) ?
        // seleksi derajat positif/negatif 
         (derajat >= 270) ? `360 - ${derajat}` :
         (derajat < -271) ? `-360-(${derajat})` :
                '' : ''
    }
        = ${deg}`;
        hasilTri = ` sin${deg}°= ${hasilSdt1} (kuadran${kuadran})`;
        
      } else if (sinCosTan.trim().toLowerCase() === 'cos' || sinCosTan.trim().toLowerCase() === 'cos ') {
        hasilSdt2 = hitungCos(deg, kuadran);
        sudutInput.value = hasilSdt2;
        operasiTri = `cos${derajat}°=${
         //seleksi masuk kuadran berapa 
            (kuadran === 1) ? `${derajat} - 0` :
            (kuadran === 2) ?
         // seleksi derajat positif/negatif 
            (derajat >= 90) ? `180 - ${derajat}` :
            (derajat < -90) ? `-180 -( ${derajat})` :
            '' : // string ' ' supaya tidak eror
            (kuadran === 3) ?
          // seleksi derajat positif/negatif 
            (derajat >= 180) ? `${derajat} -180` :
            (derajat < -180) ? `180${derajat}` :
                            '' :
            (kuadran === 4) ?
          // seleksi derajat positif/negatif 
            (derajat >= 270) ? `360 - ${derajat}` :
            (derajat < -271) ? `-360-(${derajat})` :
                 '' : ''
   } 
              = ${deg}`;
        hasilTri = ` cos${deg}°= ${hasilSdt2} (kuadran${kuadran})`;
        
      } else if (sinCosTan.trim().toLowerCase() === 'tan' || sinCosTan.trim().toLowerCase() === 'tan ') {
        hasilSdt3 = hitungTan(deg, kuadran);
        sudutInput.value = hasilSdt3;
        operasiTri = `tan${derajat}°=${
                //seleksi masuk kuadran berapa 
                (kuadran === 1) ? `${derajat} - 0` :
                (kuadran === 2) ?
                // seleksi derajat positif/negatif 
                (derajat >= 90) ? `180 - ${derajat}` :
                (derajat < -90) ? `-180 -( ${derajat})` :
                '' : // string ' ' supaya tidak eror
                (kuadran === 3) ?
                // seleksi derajat positif/negatif 
                (derajat >= 180) ? `${derajat} -180` :
                (derajat < -180) ? `180${derajat}` :
                '' :
                (kuadran === 4) ?
                // seleksi derajat positif/negatif 
                (derajat >= 270) ? `360 - ${derajat}` :
                (derajat < -271) ? `-360-(${derajat})` :
                '' : ''
              } 
              = ${deg}`;
        hasilTri = `tan${deg}°= ${hasilSdt3} (kuadran${kuadran})`;
        
      }
      document.querySelector('.hasil-p-tri').innerHTML = operasiTri;
      document.querySelector('.hasil-p-tri1').innerHTML = hasilTri;
      caraTri.style.display = 'flex';
      console.log(hitungSudutIstime);
    }
  }
  
  //function hitung sin
  function hitungSin(deg, kuadran) {
    if (kuadran == 1 || kuadran == 2) {
      if (deg <= -30) {
        return '-' + hitungSinEnd(deg);
      }
      else if (deg >= 30) {
        return hitungSinEnd(deg);
      }
    } else if (kuadran == 3 || kuadran == 4) {
      if (deg <= -30) {
        return hitungSinEnd(deg);
      }
      else if (deg >= 30) {
        return '-' + hitungSinEnd(deg);
      }
    }
  }
  
  // function untuk jawaban sudut istimewa
  function hitungSinEnd(deg) {
    var sudut1 = '';
  
    if (deg == 30) {
      sudut1 = '1/2';
    } else if (deg == 45) {
      sudut1 = '1/2√2';
    } else if (deg == 60) {
      sudut1 = '1/2√3';
    } else if (deg == 90) {
      sudut1 = '1';
    } else if (deg == 0) {
      sudut1 = '0';
    }
    else if(deg == -30) {
      sudut1 = '1/2';
    } else if (deg == -45) {
      sudut1 = '1/2√2';
    } else if (deg == -60) {
      sudut1 = '1/2√3';
    } else if (deg == -90) {
      sudut1 = '1';
    } else {
      sudut1 = 'belum tersedia';
    }
    return sudut1;
  }
  //function hitung cos
  function hitungCos(deg, kuadran) {
    if (kuadran == 1 || kuadran == 4) {
      if (deg <= -30) {
        return '-' + hitungCosEnd(deg);
      }
      else if (deg >= 30) {
        return hitungCosEnd(deg);
      }
    } else if (kuadran == 3 || kuadran == 2) {
      if (deg <= -30) {
        return hitungCosEnd(deg);
      }
      else if (deg >= 30) {
        return '-' + hitungCosEnd(deg);
      }
    }
  }
  
  // function untuk jawaban sudut istimewa
  function hitungCosEnd(deg) {
    var sudut = '';
  
    if (deg == 30) {
      sudut = '1/2√3';
    } else if (deg == 45) {
      sudut = '1/2√2';
    } else if (deg == 60) {
      sudut = '1/2';
    } else if (deg == 90) {
      sudut = '0';
    } else if (deg == 0) {
      sudut = '1';
    }
    else if(deg == -30) {
      sudut = '1/2√3';
    } else if (deg == -45) {
      sudut = '1/2√2';
    } else if (deg == -60) {
      sudut = '1/2';
    }else if (deg == -90) {
      sudut = '0';
    }else if (deg == 0 ) {
      sudut = '1';
    }else {
      sudut = 'belum tersedia';
    }
    return sudut;
  }
  //function hitung tan
  function hitungTan(deg, kuadran) {
    if (kuadran == 1 || kuadran == 3) {
      if (deg <= -30) {
        return '-' + hitungTanEnd(deg);
      }
      else if (deg >= 30) {
        return hitungTanEnd(deg);
      }
    } else if (kuadran == 4 || kuadran == 2) {
      if (deg <= -30) {
        return hitungTanEnd(deg);
      }
      else if (deg >= 30) {
        return '-' + hitungTanEnd(deg);
      }
    }
  }
  
  // function untuk jawaban sudut istimewa
  function hitungTanEnd(deg) {
    var sudut = '';
  
    if (deg == 30) {
      sudut = '1/3√3';
    } else if (deg == 45) {
      sudut = '1';
    } else if (deg == 60) {
      sudut = '1/3';
    } else if (deg == 90) {
      sudut = 'infinity🔥';
    } else if (deg == 0) {
      sudut = '0';
    } else if (deg == -30) {
      sudut = '1/3√3';
    } else if (deg == -45) {
      sudut = '1';
    } else if (deg == -60) {
      sudut = '1/3';
    } else if (deg == -90) {
      sudut = 'infinity🔥';
    }else {
      sudut = 'belum tersedia';
    }
    //return menampilkan sudut 
    return sudut;
  }
  