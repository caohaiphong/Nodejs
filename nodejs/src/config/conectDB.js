

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('congnghephanmem', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công.');
    } catch (error) {
        console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
    }
}

module.exports = connectDB;