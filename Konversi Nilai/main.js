function proceedSubj() {
  // menambah tampilan teks sebelum input nilai
  var text = document.createElement("h4");
  text.innerHTML = "Masukkan masing-masing nilai";
  document.getElementById("container").appendChild(text);

  // iterasi untuk kolom input
  var numOfSubj = document.getElementById("numOfSubj").value;
  for (i = 0; i < numOfSubj; i++) {
    var input = document.createElement("input");
    document.getElementById("container").appendChild(input);
  }
  // menangkap error child terakhir tidak terbaca di iterasi
  for (j = 0; j <= numOfSubj; j++) {
    var x = document.getElementsByTagName("input")[j];
    if (x.id == "") {
      x.id = "input" + j;
      x.setAttribute("class", "form-control mb-3");
      x.setAttribute("type", "text");
      x.setAttribute("placeholder", "Masukkan nilai 0 s/d 4");
    }
  }

  // membuat tombol kalkulasi nilai
  var btn = document.createElement("button");
  btn.innerHTML = "Kalkulasi";
  btn.id = "calcBtn";
  btn.setAttribute("class", "btn btn-primary");
  btn.setAttribute("onclick", "proceedCalc()");
  document.getElementById("container").appendChild(btn);
}

// menghitung input user
function proceedCalc() {
  var total = 0;
  var numOfSubj = document.getElementById("numOfSubj").value;
  for (i = 1; i <= numOfSubj; i++) {
    x = document.getElementById("input" + i).value;
    // kondisional untuk memberi limit input user
    if (x < 0 || x > 4 || isNaN(x)) {
      var warning = document.createElement("h5");
      warning.setAttribute("class", "mt-3");
      warning.innerHTML = "Masukan Anda salah, silakan refresh dan ulang";
      document.getElementById("container").appendChild(warning);
      return;
    }
    total += parseFloat(x);
  }
  var finalScore = total / numOfSubj;

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
