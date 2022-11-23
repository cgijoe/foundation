const dotenv = require('dotenv');
dotenv.config();

export default {
    applicationPort: parseInt(process.env.PORT || '3001'),
    dbType: process.env.DB_TYPE,
    dbURL: process.env.DB_URL,
    dbPort: parseInt(process.env.DB_PORT || '3306'),
    dbName: process.env.DB_NAME,
    dbUserName: process.env.DB_USER_NAME,
    dbPassword: process.env.DB_PASSWORD,
}