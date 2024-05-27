export function ketQuaTuyenSinh() {
    let diemChuan = Number(document.getElementById('bai-1-diem-chuan').value);
    let diemKhuVuc = Number(document.getElementById('bai-1-khu-vuc').value);
    let diemDoiTuong = Number(document.getElementById('bai-1-doi-tuong').value);
    let diemMon1 = Number(document.getElementById('bai-1-diem-mon-1').value);
    let diemMon2 = Number(document.getElementById('bai-1-diem-mon-2').value);
    let diemMon3 = Number(document.getElementById('bai-1-diem-mon-3').value);
    let ketQua = document.getElementById('bai-1-ket-qua');

    let thongBao = '';

    if (!diemMon1 || !diemMon2 || !diemMon3) {
        thongBao = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
    } else {
        let tongDiem = diemKhuVuc + diemDoiTuong + diemMon1 + diemMon2 + diemMon3;
        if (tongDiem >= diemChuan) {
            thongBao = `Bạn đã đậu. Tổng diểm ${tongDiem}`;
        } else {
            thongBao = `Bạn đã rớt. Tổng diểm ${tongDiem}`;
        }
    }
    
    ketQua.innerHTML = thongBao;
}

export function tinhTienDien() {
    let hoTen = document.getElementById('bai-2-ho-ten').value;
    let soKw = Number(document.getElementById('bai-2-so-kw').value);
    let ketQua = document.getElementById('bai-2-ket-qua');
    const donGiaCap1 = 500;
    const donGiaCap2 = 650;
    const donGiaCap3 = 850;    
    const donGiaCap4 = 1100;    
    const donGiaCap5 = 1300;

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

        thongBao = `Họ tên: ${hoTen}; Tiền điện: ${dinhDangTienVN(soTien)}`;
    }

    ketQua.innerHTML = thongBao;
}

export function tinhThueThuNhapCaNhan() {
    let hoTen = document.getElementById('bai-3-ho-ten').value;
    let tongThuNhap = Number(document.getElementById('bai-3-thu-nhap-nam').value);
    let soNguoiPhuThuoc = Number(document.getElementById('bai-3-so-nguoi-phu-thuoc').value);
    let thuNhapChiuThue = tongThuNhap - 4000000 - (1600000 * soNguoiPhuThuoc);
    let ketQua = document.getElementById('bai-3-ket-qua');
    const thueCap1 = 0.05;
    const thueCap2 = 0.1;
    const thueCap3 = 0.15;    
    const thueCap4 = 0.2;    
    const thueCap5 = 0.25;
    const thueCap6 = 0.3;
    const thueCap7 = 0.35;

    let thongBao = '';

    if (!tongThuNhap) {
        thongBao = `Số tiền thu nhập không hợp lệ`;
    } else {
        let soTien = 0;
        if (thuNhapChiuThue > 960000000) {
            soTien = thuNhapChiuThue * thueCap7;
        } else if (thuNhapChiuThue > 624000000) {
            soTien = thuNhapChiuThue * thueCap6;
        } else if (thuNhapChiuThue > 384000000) {
            soTien = thuNhapChiuThue * thueCap5;
        } else if (thuNhapChiuThue > 210000000) {
            soTien = thuNhapChiuThue * thueCap4;
        } else if (thuNhapChiuThue > 120000000) {
            soTien = thuNhapChiuThue * thueCap3;
        } else if (thuNhapChiuThue > 60000000) {
            soTien = thuNhapChiuThue * thueCap2;
        } else {
            soTien = thuNhapChiuThue * thueCap1;
        }

        thongBao = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${dinhDangTienVN(soTien)}`;
    }

    ketQua.innerHTML = thongBao;
}

export function tinhTienCap() {
    let loaiKhachHang = document.getElementById('bai-4-loai-khach-hang').value;
    let maKhachHang = document.getElementById('bai-4-ma-khach-hang').value;
    let soKenhCaoCap = Number(document.getElementById('bai-4-so-kenh-cao-cap').value);
    let soKetNoi = Number(document.getElementById('bai-4-so-ket-noi').value);
    let ketQua = document.getElementById('bai-4-ket-qua');

    let thongBao = '';

    if (!loaiKhachHang) {
        thongBao = `Vui lòng chọn loại Khách hàng`;
    } else {
        let soTien = 0;

        if (loaiKhachHang == 'personal') {
            soTien = 4.5 + 20.5; // Phí xử lý hóa đơn + phí dịch vụ
            soTien += 7.5 * soKenhCaoCap;
        } else {
            soTien = 15; // Phí xử lý hóa đơn
            if (soKetNoi > 10) {
                soTien += 75 + ((soKetNoi - 10) * 5);
            } else {
                soTien += 75;
            }
            soTien += (50 * soKenhCaoCap); // Kênh cao cấp
        }

        thongBao = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${dinhDangTienUSD(soTien)}`;
    }

    ketQua.innerHTML = thongBao;
}

// Hàm chung
function dinhDangTienVN(soTien) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
}

function dinhDangTienUSD(soTien) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(soTien);
}