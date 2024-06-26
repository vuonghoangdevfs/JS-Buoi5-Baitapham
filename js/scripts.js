import {ketQuaTuyenSinh, tinhTienDien, tinhThueThuNhapCaNhan, tinhTienCap} from './method.js';

// Bài tập 1: Quản lý tuyển sinh
document.getElementById('bai-tap-1-form').onsubmit = function() {
    ketQuaTuyenSinh();
    return false;
}

// Bài tập 2: Tính tiền điện
document.getElementById('bai-tap-2-form').onsubmit = function() {
    tinhTienDien();
    return false;
}

// Bài tập 3: Tính thuế thu nhập cá nhân
document.getElementById('bai-tap-3-form').onsubmit = function() {
    tinhThueThuNhapCaNhan();
    return false;
}

// Bài tập 4: Tính tiền cáp
document.getElementById("bai-4-loai-khach-hang").addEventListener("change", function(e){
    document.getElementById("bai-4-so-ket-noi").style.display = (e.target.value == 'company') ? 'block' : 'none';
});

document.getElementById('bai-tap-4-form').onsubmit = function() {
    tinhTienCap();
    return false;
}