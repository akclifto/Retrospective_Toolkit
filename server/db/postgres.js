const { Pool } = require('pg');

const postgresClient = new Pool({
    connectionString: process.env.DATABASE_URL, 
    ssl: { rejectUnauthorized: false },
    max: 20
});

// local connection settings
/*const postgresClient = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'postgres',
    max: 20
});*/

//insure database is initialized


module.exports = postgresClient;