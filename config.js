require('dotenv').config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  DB_URL: process.env.DB_URL,
  LOCAL_DB_URL: process.env.LOCAL_DB_URL,
  TEST_DB_URL: process.env.TEST_DB_URL
};
