const { Sequelize } = require('sequelize');

// Thay thế các thông tin sau bằng thông tin từ Clever Cloud
const sequelize = new Sequelize('DATABASE_NAME', 'USER', 'PASSWORD', {
  host: 'HOST',
  dialect: 'mysql',
  port: 3306, // Cổng mặc định cho MySQL
  logging: false, // Tắt logging nếu không cần
  dialectOptions: {
    ssl: {
      require: true, // Clever Cloud yêu cầu SSL
      rejectUnauthorized: false, // Không kiểm tra chứng chỉ
    },
  },
});

sequelize.authenticate()
  .then(() => console.log('Kết nối cơ sở dữ liệu thành công!'))
  .catch((error) => console.error('Lỗi kết nối:', error));

module.exports = sequelize;
