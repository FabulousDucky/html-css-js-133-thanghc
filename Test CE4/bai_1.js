function findAndCalPrimeNumber() {
    var input_a = document.getElementById("number_a").value;
    var input_b = document.getElementById("number_b").value;

    if (input_a == "" || input_b == "") {
        alert("Invalid input a or b")
    }

    var number_a = parseInt(input_a, 10);
    var number_b = parseInt(input_b, 10);
    if (number_a > number_b || number_a < 0 || number_b < 0) {
        alert("Invalid input a or b")
    } else {
        var listPrimeNumbers = findListPrimeNumber(number_a, number_b)
        calSum(listPrimeNumbers);
    }
}

function findListPrimeNumber(a, b) {
    let i, j, flag;
    var arrayPrimeNum = []
    // Kiểm tra các số từ a -> b
    for (i = a; i <= b; i++) {
         // gọi số đang xét là i, nếu số đó là 0 hoặc 1 thì ta bỏ qua
        if (i == 1 || i == 0) {
            continue;
        }
         // gán trị flag = 1, giả định số đang xét là số nguyên tố    
        flag = 1; 
        // thực hiện chia i cho 1 biến đếm tăng dần từ 2 tới i/2
        for (j = 2; j <= i / 2; ++j) {
            // nếu i chia hết cho j thì số đó k phải số nguyên tố
            if (i % j == 0) {
                // ta gán lại flag = 0 và thoát vòng lặp
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            arrayPrimeNum.push(i)
        }
    }
       return arrayPrimeNum
}

function calSum(listPrimeNumber) {
    var sum = 0
    for (let i = 0; i < listPrimeNumber.length; i++) {
        sum += listPrimeNumber[i]
    }
    if (sum == 0) {
        alert("No prime number between a and b")
    } else {
        const div = document.createElement("my-result")
        div.innerHTML =
            `<div style="white-space: pre-wrap;">${sum}</div>`
            ;
        document.querySelector("body").appendChild(div);
    }
}