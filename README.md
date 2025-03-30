# Bookstore Project

Đây là ứng dụng quản lý sách với Next.js và SQL Server.

## Cài đặt và chạy ứng dụng

### 1. Clone dự án về máy

  git clone https://github.com/your-username/bookstore-demo.git cd bookstore-demo


### 2. Cài đặt các dependencies
Đảm bảo bạn đã cài **Node.js** và **npm**. Chạy lệnh sau để cài đặt các dependencies:

  npm install



### 3. Cấu hình `.env`

Tạo file `.env` trong thư mục gốc của dự án và cấu hình các biến môi trường sau:

  PORT=5001
  DB_USER=sa
  DB_PASS=Vanthinh261005
  DB_SERVER=localhost
  DB_NAME=bookstore_db


### 4. Chạy backend (Node.js + SQL Server)

Trước tiên, đảm bảo đã chạy **SQL Server** trên máy (hoặc dùng Docker).
Sau đó, trong thư mục backend (`bookstore-be`), chạy lệnh:

  npm run dev


Ứng dụng sẽ chạy trên `http://localhost:3000`.

## Troubleshooting

- Nếu gặp lỗi "port already in use", bạn có thể đổi port trong file `.env` (5001) và restart lại.
- Nếu sử dụng Docker, chắc chắn rằng container SQL Server đang chạy.

