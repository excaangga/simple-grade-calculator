function addRow() {
  var numOfRow = document.getElementById("table-body").childElementCount;

  var tableBody = document.getElementById("table-body");
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var input1 = document.createElement("input");
  var input2 = document.createElement("input");
  var input3 = document.createElement("input");
  var input4 = document.createElement("input");
  var input5 = document.createElement("input");

  input1.id = "productName" + (numOfRow + 1);
  input1.setAttribute("class", "form-control");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "Nama barang");
  td1.appendChild(input1);

  input2.id = "productPrice" + (numOfRow + 1);
  input2.setAttribute("class", "form-control");
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "Nama barang");
  td2.appendChild(input2);

  input3.id = "productQty" + (numOfRow + 1);
  input3.setAttribute("class", "form-control");
  input3.setAttribute("type", "text");
  input3.setAttribute("placeholder", "Nama barang");
  td3.appendChild(input3);

  input4.id = "productDisc" + (numOfRow + 1);
  input4.setAttribute("class", "form-control");
  input4.setAttribute("type", "text");
  input4.setAttribute("placeholder", "Nama barang");
  td4.appendChild(input4);

  input5.id = "tempTotal" + (numOfRow + 1);
  input5.setAttribute("class", "form-control-plaintext");
  input5.setAttribute("type", "text");
  input5.setAttribute("readonly", "");
  input5.setAttribute("value", "NULL");
  td5.appendChild(input5);

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);

  tableBody.appendChild(row);
}

function calculate() {
  var resCalc = 0;
  var numOfRow = document.getElementById("table-body").childElementCount;
  var resContainer = document.getElementById("resContainer");
  for (i = 0; i < numOfRow; i++) {
    var price = parseFloat(
      document.getElementById("productPrice" + (i + 1)).value
    );
    var qty = parseFloat(document.getElementById("productQty" + (i + 1)).value);
    var disc = parseFloat(
      document.getElementById("productDisc" + (i + 1)).value
    );
    var tempTotal = document.getElementById("tempTotal" + (i + 1));
    var tempCalc = 0;

    tempCalc = (price - (price * disc) / 100) * qty;
    // console.log(tempCalc);
    tempTotal.setAttribute("value", +tempCalc);

    resCalc += tempCalc;
  }
  // console.log(resCalc);
  resContainer.innerHTML = "Harga yang harus dibayar = " + resCalc;
}
