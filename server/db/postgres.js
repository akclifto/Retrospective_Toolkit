import { Pool } from "pg";

const postgresClient = new Pool({
  connectionString:
    "postgres://iudbbwehqhqsyb:eb217e6cd20552874c2fdf6ed6119c86daff30abd785131dcb2ddd6f7829eab9@ec2-54-204-26-236.compute-1.amazonaws.com:5432/dec3qk81t9ofb2",
  ssl: { rejectUnauthorized: false },
  max: 20,
});

// local connection settings
// const postgresClient = new Pool({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'admin',
//     database: 'postgres',
//     max: 20
// });

// insure database is initialized

export default postgresClient;
