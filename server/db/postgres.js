const { Pool } = require('pg');

const postgresClient = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'postgres',
    max: 20
});

//insure database is initialized


module.exports = postgresClient;