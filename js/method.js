export function ketQuaTuyenSinh() {
    let diemChuan = Number(document.getElementById('bai-1-diem-chuan').value);
    let khuVuc = Number(document.getElementById('bai-1-khu-vuc').value);
    let doiTuong = Number(document.getElementById('bai-1-doi-tuong').value);
    let diemMon1 = Number(document.getElementById('bai-1-diem-mon-1').value);
    let diemMon2 = Number(document.getElementById('bai-1-diem-mon-2').value);
    let diemMon3 = Number(document.getElementById('bai-1-diem-mon-3').value);
    let ketQua = document.getElementById('bai-1-ket-qua');

    let thongBao = '';

    if (!diemMon1 || !diemMon2 || !diemMon3) {
        thongBao = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
    } else {
        let tongDiem = khuVuc + doiTuong + diemMon1 + diemMon2 + diemMon3;
        if (tongDiem >= diemChuan) {
            thongBao = `Bạn đã đậu. Tổng diểm ${tongDiem}`;
        } else {
            thongBao = `Bạn đã rớt. Tổng diểm ${tongDiem}`;
        }
    }
    
    ketQua.innerHTML = thongBao;
}

export function tinhTienDien() {
    let hoTen = Number(document.getElementById('bai-2-ho-ten').value);
    let soKw = Number(document.getElementById('bai-2-so-kw').value);
    let ketQua = document.getElementById('bai-2-ket-qua');
    const donGiaCap1 = 500;
    const donGiaCap2 = 1000;
    const donGiaCap3 = 1500;    
    const donGiaCap4 = 2000;    
    const donGiaCap5 = 2500;

    let thongBao = '';

    if (!soKw) {
        thongBao = `Số kw không hợp lệ! Vui lòng nhập lại`;
    } else {
        let soTien = 0;
        if (soKw > 350) {
            soTien = ((soKw - 350) * donGiaCap5) + (150 * donGiaCap4) + (100 * donGiaCap3) + (50 * donGiaCap2) + (50 * donGiaCap1);
        } else if (soKw > 200) {
            soTien = ((soKw - 200) * donGiaCap4) + (100 * donGiaCap3) + (50 * donGiaCap2) + (50 * donGiaCap1);
        } else if (soKw > 100) {
            soTien = ((soKw - 100) * donGiaCap3) + (50 * donGiaCap2) + (50 * donGiaCap1);
        } else if (soKw > 50) {
            soTien = ((soKw - 50) * donGiaCap2) + (50 * donGiaCap1);
        } else {
            soTien = 50 * donGiaCap1;
        }

        thongBao = `Họ tên: ${hoTen}; Tiền điện: ${dinhDangTien(soTien)}`;
    }

    ketQua.innerHTML = thongBao;
}

export function tinhThueThuNhapCaNhan() {
    let tyLeQuyDoi = 23500;
    let soTien = Number(document.getElementById('bai-3-so-tien').value);
    let ketQua = document.getElementById('bai-3-ket-qua');

    ketQua.innerHTML = dinhDangTien(soTien * tyLeQuyDoi);
}

export function tinhTienCap() {
    let chieuDai = Number(document.getElementById('bai-4-chieu-dai').value);
    let chieuRong = Number(document.getElementById('bai-4-chieu-rong').value);
    let ketQua = document.getElementById('bai-4-ket-qua');

    ketQua.innerHTML = `Diện tích: ${chieuDai * chieuRong}; Chu vi: ${(chieuDai + chieuRong) * 2}`;
}

// Hàm chung
function dinhDangTien(soTien) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
}