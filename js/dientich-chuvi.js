/**
 * Mô hình 3 khối
 * 
 * Khối 1: Input
 *      chieuDai, chieuRong
 * 
 * Khối 2: Các bước xử lí
 *      Bước 1: Khai báo biến và lưu trá trị input
 *      Bước 2: lập công thức tính toán
 *          chuVi = (chieuDai + chieuRong) * 2
 *          dienTich = chieuDai * chieuRong 
 *      Bước 3: thông báo kết quả
 * Khối 3: Output
 *      Chu vi và diện tích của hình chữ nhật
 */

//? Bước 1:

var chieuDai = 10;
var chieuRong = 5;
var chuVi = 0;
var dienTich = 0;

//? Bước 2:

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong ;

//? Bước 3:

console.log("Chu vi hình chữ nhật là: " + chuVi);
console.log("Diện tích hình chữ nhật là: " + dienTich);