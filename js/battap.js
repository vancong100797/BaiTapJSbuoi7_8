var numArray = [];

function nhapSo() {
    var num = Number(document.getElementById("number").value);
    numArray.push(num);
    document.getElementById("ketQua").innerHTML = "Dãy số: " + numArray + "; ";
}

// 1: Tổng các số dương trong mẳng
function tongSoDuong() {
    var sum = 0;
    for (i = 0; i < numArray.length; i++) {
        if (0 < numArray[i]) {
            sum += numArray[i];
        }
    }
    document.getElementById("kQua").innerHTML = "Tổng số dương: " + sum;
}

// 2: Đếm số dương trong mảng
function demSoDuong() {
    var demsD = 0;
    for (i = 0; i < numArray.length; i++) {
        if (0 < numArray[i]) {
            demsD++;
        }
    }
    document.getElementById("kQua").innerHTML = "Có: " + demsD + " số dương";
}

// 3: Số nhỏ nhất trong mảng
function timSoNhoNhat() {
    var min = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.getElementById("kQua").innerHTML = "Số nhỏ nhất trong mảng: " + min;
}

// 4: Số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat() {
    var minDuong;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            minDuong = numArray[i];
            break;
        }
    }

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < minDuong && numArray[i] > 0) {
            minDuong = numArray[i];
        }
    }
    document.getElementById("kQua").innerHTML = "Số dương nhỏ nhất trong mảng: " + minDuong;
}

// 5: Số chẵn cuối cùng
function soChanCuoiCung() {
    for (var i = numArray.length - 1; i >= 0; i--) {
        if (numArray[i] % 2 == 0) {
            document.getElementById("kQua").innerHTML = "Số chẵn cuối cùng: " + numArray[i];
            break;
        } else {
            document.getElementById("kQua").innerHTML = "Số chẵn cuối cùng: -1";
        }
    }
}

// 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
function doiCho() {
    var change = numArray[0];
    numArray[0] = numArray[2];
    numArray[2] = change;
    document.getElementById("kQua").innerHTML = "Đổi vị trí giá trị index[0] và index[2]: " + numArray;
}

// 7: Sắp xếp mảng theo thứ tự tăng dần
function sapXep() {
    for (var i = 0; i < numArray.length - 1; i++) {
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[j] < numArray[i]) {
                var temp = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = temp;
            }
        }
    }
    document.getElementById("kQua").innerHTML = "Theo thứ tự tăng dần: " + numArray;
}

// 8: Số nguyên tố đầu tiên trong mảng
function timSNT() {
    for (var i = 0; i < numArray.length; i++) {
        if (check(numArray[i]) == 0 && numArray[i] > 0) {
            document.getElementById("kQua").innerHTML = "Số nguyên tố đầu tiên: " + numArray[i];
            break;
        } else {
            document.getElementById("kQua").innerHTML = "Số nguyên tố đầu tiên: -1";
        }
    }
}

function check(n) {
    var a = 0;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            a++;
        }
    }
    if (a > 0) {
        return 1;
    } else {
        return 0;
    }
}

// 9: Đếm số nguyên trong mảng số thực
function mangSoThuc() {
    var soNguyen = 0;
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] == parseInt(numArray[i])) {
            soNguyen++;
        }
    }
    document.getElementById("kQua").innerHTML = "Có: " + soNguyen + " số nguyên";
}

// 10: So sánh số lượng số dương và số lượng số âm
function soSanh() {
    var duong = 0;
    var am = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            duong++;
        } else if (numArray[i] < 0) {
            am++;
        }
    }

    if (duong > am) {
        document.getElementById("kQua").innerHTML = "Số dương nhiều hơn số âm";
    } else if (am > duong) {
        document.getElementById("kQua").innerHTML = "Số âm nhiều hơn số dương";
    } else if (am = duong) {
        document.getElementById("kQua").innerHTML = "Số âm bằng số dương";
    }
}