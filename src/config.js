/**
 * @type { { app: { port: number, env: string, domain: string }, db: import('mysql2').PoolOptions }}
 */
const config = {
  app: {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    domain: process.env.DOMAIN,
  },
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
  },
};

export default config;
