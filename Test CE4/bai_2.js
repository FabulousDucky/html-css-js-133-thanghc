function getTriangle() {
    var input = document.getElementById("line-number").value;
    if (input < 1 || input > 10) {
      alert("Invalid number")
    } else {
      var input_number = parseInt(input, 10)
      numberOneTriangle(input_number)
    }
  }

  function numberOneTriangle(n) {
    var myTriangle = ""
    for (let i = 0; i < n + 1; i++) {
      myTriangle +="*".repeat(i)+"\n";
    }
    console.log(myTriangle)
    const div = document.createElement("div")
    div.innerHTML = 
    `<div style="white-space: pre-wrap;">${myTriangle}</div>`;
    document.querySelector("body").appendChild(div);
  }