const { Sequelize } = require('sequelize');

// Sử dụng biến môi trường
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Tên cơ sở dữ liệu
  process.env.DB_USER,     // Tên người dùng
  process.env.DB_PASSWORD, // Mật khẩu
  {
    host: process.env.DB_HOST,  // Địa chỉ host
    dialect: process.env.DB_DIALECT || 'mysql', // Loại CSDL
    logging: false              // Vô hiệu hóa log (tùy chọn)
  }
);

module.exports = sequelize;
