import { createPool } from 'mysql2';
import config from './config.js';

/**
 * @type { import('mysql2/promise.js').PoolConnection }
 */
const pool = createPool(config.db).promise();

export default pool;
