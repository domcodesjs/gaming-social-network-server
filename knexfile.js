const { TEST_DB_URL, LOCAL_DB_URL, DB_URL } = require('./config');

module.exports = {
  development: {
    client: 'pg',
    connection: LOCAL_DB_URL
  },
  production: {
    client: 'pg',
    connection: DB_URL
  },
  test: {
    client: 'pg',
    connection: TEST_DB_URL
  }
};
