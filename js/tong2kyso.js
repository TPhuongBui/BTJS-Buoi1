/**
 * Mô hình 3 khối
 * 
 *  Khối 1: input
 *    Số nguyên dương cố 2 chữ số (12,22,45,...)
 *?    num, soHangChuc, sohangDV
 * 
 * Khối 2: Các bước xử lí
 * 
 *    Bước 1: Khai báo biến và gán giá trị
 * 
 *    Bước 2: Lập công thức
 *      Bóc tách từng số: hàng chục, hàng đơn vị
 *        + Lấy hàng chục
 *          soHangChuc = Math.floor(num/10) => lấy phần nguyên trong phép chia cho 10
 *        + Lấy hàng đơn vị
 *          - soHangDV = Math.floor(num % 10) => lấy phần dư trong phép chia cho 10
 *        + tong = soHangChuc + soHangDV
 *    Bước 3: thông báo kết quả
 *
 * Khối 3: output
 *    Tổng của 2 chữ số ( 45 = 9)
 */
 

 //? Bước 1:

 var num = 57;
 var soHangChuc = 0;
 var soHangDV = 0;
 var tong = 0;

 //? Bước 2:

  soHangChuc = Math.floor(num/10);

  soHangDV =  Math.floor(num % 10);

 tong = soHangChuc + soHangDV;

 //? Bước 3:

 console.log("Tổng 2 ký số là: " + tong);