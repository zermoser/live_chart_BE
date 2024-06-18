import pool from "../database.js";

export const getAllPopulationSevice = async () => {
  const sql = "SELECT * FROM population";

  const [population] = await pool.query(sql);

  return population;
};
