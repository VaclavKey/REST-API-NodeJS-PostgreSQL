import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password: '1703',
    host: 'localhost',
    port: 5432,
    database: 'restapi_nodejs',
});

export default pool;