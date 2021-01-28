require('dotenv').config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  connectionString:
    process.env.NODE_ENV === 'test'
      ? process.env.TEST_DB_URL
      : process.env.NODE_ENV === 'development'
      ? process.env.LOCAL_DB_URL
      : process.env.DB_URL
};
