function hitungRatarata() {
    const hit1 = document.querySelector('#dataInput1').value
    const hit2 = document.querySelector('#dataInput2').value
    const hit3 = document.querySelector('#dataInput3').value
    const hit4 = document.querySelector('#dataInput4').value
    const hit5 = document.querySelector('#dataInput5').value
    
    const hit6 = document.querySelector('#dataInput6').value
    const hit7 = document.querySelector('#dataInput7').value
    const hit8 = document.querySelector('#dataInput8').value
    const hit9 = document.querySelector('#dataInput9').value
    const hit10 = document.querySelector('#dataInput10').value
    
    let bar1 = hit1*hit6
    let bar2 = hit2*hit7
    let bar3 = hit3*hit8
    let bar4 = hit4*hit9
    let bar5 = hit5*hit10
    let atas = bar1+bar2+bar3+bar4+bar5
    let bawah = parseInt(hit6) + parseInt(hit7) + parseInt(hit8) + parseInt(hit9) + parseInt(hit10)
    let hasil = atas/bawah
   let cara = `(${hit1}×${hit6})+(${hit2}×${hit7})+(${hit3}×${hit8})+(${hit4}×${hit9})+(${hit5}×${hit10})/${bawah}`
  document.querySelector('.absorb').textContent = cara;
  document.querySelector('.hasil').textContent = hasil;
}