function proceedSubj() {  
  // mematikan button "Proses"
  document.getElementById("proceedSubj").disabled = true;

  // menambah tampilan teks sebelum input nilai
  var text = document.createElement("h4");
  text.innerHTML = "Masukkan nilai dan SKS";
  document.getElementById("pretext").appendChild(text);

  // menambah keterangan kolom input
  var textNilai = document.createElement("h5");
  var textSks = document.createElement("h5");
  textNilai.innerHTML = "Nilai";
  textSks.innerHTML = "SKS";
  document.getElementById("container").appendChild(textNilai);
  document.getElementById("containerSks").appendChild(textSks);

  // iterasi untuk kolom input
  var numOfSubj = document.getElementById("numOfSubj").value;
  for (i = 0; i < numOfSubj; i++) {
    var inputNilai = document.createElement("input");
    var inputSks = document.createElement("input");
    document.getElementById("container").appendChild(inputNilai);
    document.getElementById("containerSks").appendChild(inputSks);
  }
  // menangkap error child terakhir tidak terbaca di iterasi
  // kolom nilai
  for (j = 0; j <= numOfSubj; j++) {
    var x = document.getElementsByTagName("input")[j];
    if (x.id == "") {
      x.id = "inputNilai" + j;
      x.setAttribute("class", "form-control mb-3");
      x.setAttribute("type", "text");
      x.setAttribute("placeholder", "Masukkan nilai 0 s/d 4");
    }
  }
  // kolom sks
  for (k = 0; k <= numOfSubj; k++){    
    var y = document.getElementsByTagName("input")[parseInt(numOfSubj) + k];
    if (y.id == "") {
      y.id = "inputSks" + k;
      y.setAttribute("class", "form-control mb-3");
      y.setAttribute("type", "text");
      y.setAttribute("placeholder", "Masukkan SKS matkul " + k);
    }
  }

  // membuat tombol kalkulasi nilai
  var btn = document.createElement("button");
  btn.innerHTML = "Kalkulasi";
  btn.id = "proceedCalc";
  btn.setAttribute("class", "btn btn-primary");
  btn.setAttribute("onclick", "proceedCalc()");
  document.getElementById("posttext").appendChild(btn);
}

// menghitung input user
function proceedCalc() {
  // mematikan button "Kalkulasi"
  document.getElementById("proceedCalc").disabled = true;
  // var untuk perhitungan SKS*nilai matkul terkait
  var totalAtas = 0;
  var totalBawah = 0;
  var numOfSubj = document.getElementById("numOfSubj").value;
  for (i = 1; i <= numOfSubj; i++) {
    x = document.getElementById("inputNilai" + i).value;
    y = document.getElementById("inputSks" + i).value;
    // kondisional untuk memberi limit input user
    if (x < 0 || x > 4 || isNaN(x) || isNaN(y) || !x || !y) {
      var warning = document.createElement("h5");
      warning.setAttribute("class", "mt-3");
      warning.innerHTML = "Masukan nilai Anda salah, silakan refresh dan ulang";
      document.getElementById("posttext").appendChild(warning);
      return;
    }
    // IPS = SUM(SKS*NilaiAkhirMatkul)/SUM(SKS)
    totalAtas += parseFloat(x) * parseFloat(y);
    totalBawah += parseFloat(y);
  }
  var finalScore = totalAtas / totalBawah;

  document.getElementById("finalScore").innerHTML =
    "Nilai akhir Anda = " + finalScore;

  if (finalScore == 4) {
    document.getElementById("finalGrade").innerHTML = "Grade A";
  } else if (finalScore >= 3 && finalScore < 4) {
    document.getElementById("finalGrade").innerHTML = "Grade B";
  } else if (finalScore >= 2 && finalScore < 3) {
    document.getElementById("finalGrade").innerHTML = "Grade C";
  } else if (finalScore >= 1 && finalScore < 2) {
    document.getElementById("finalGrade").innerHTML = "Grade D";
  } else {
    document.getElementById("finalGrade").innerHTML = "Grade E";
  }
}
