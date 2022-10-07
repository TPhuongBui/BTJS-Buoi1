/**
 * Mô hình 3 khối
 * 
 * Khối 1: Input
 *      soTienVND, soTienUSD
 * 
 * Khối 2: Các bước xử lí
 *      Bước 1: Khai báo biến và lưu trá trị input
 *      Bước 2: lập công thức tính toán
 *          tienQuyDoi = soTienUSD * soTienVND
 *      Bước 3: thông báo kết quả
 * Khối 3: Output
 *      Số tiền sau khi quy đổi
 */

//? Bước 1:

var soTienVND = 23500;
var soTienUSD = 2;
var tienQuyDoi = 0;

//? Bước 2:

tienQuyDoi = soTienUSD * soTienVND;

//? Bước 3:

console.log("Số tiền quy đổi được là: " + tienQuyDoi);