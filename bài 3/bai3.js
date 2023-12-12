function veTraiTim(kichThuoc) {
  let traiTim = "";

  for (let i = 0; i < kichThuoc; i++) {
    for (let j = 0; j <= kichThuoc; j++) {
      if (
        (i == 0 && j % 3 !== 0) ||
        (i == 1 && j % 3 === 0) ||
        i - j == 2 ||
        i + j == kichThuoc + 2
      ) {
        traiTim += "*";
      } else {
        traiTim += " ";
      }
    }
    traiTim += "\n";
  }

  return traiTim;
}

// Kích thước trái tim
let kichThuocTraiTim = 6;

// Lấy phần tử div để hiển thị trái tim
let divTraiTim = document.getElementById("heart");

// Gán chuỗi trái tim vào nội dung của div
divTraiTim.textContent = veTraiTim(kichThuocTraiTim);
