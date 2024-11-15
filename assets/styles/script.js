function tambah(a, b) {
    return a + b;
  }
  
  function kurang(a, b) {
    return a - b;
  }
  
  function kali(a, b) {
    return a * b;
  }
  
  function bagi(a, b) {
    if (b === 0) {
      return "Error: Tidak dapat membagi dengan nilai 0";
    } else {
      return a / b;
    }
  }

  function modulus(a, b) {
    return a % b;
  }

  function pangkat(a, b) {
    return a ** b;
  }
  
  function hasil() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
  
    document.getElementById("hasil-tambah").innerText = tambah(angka1, angka2);
    document.getElementById("hasil-kurang").innerText = kurang(angka1, angka2);
    document.getElementById("hasil-kali").innerText = kali(angka1, angka2);
    document.getElementById("hasil-bagi").innerText = bagi(angka1, angka2);
    document.getElementById("hasil-modulus").innerText = modulus(angka1, angka2);
    document.getElementById("hasil-pangkat").innerText = pangkat(angka1, angka2);
  }