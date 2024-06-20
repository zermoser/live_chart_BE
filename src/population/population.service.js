import pool from "../database.js";

export const getAllPopulationSevice = async () => {
  const sql = "SELECT * FROM population";

  const [population] = await pool.query(sql);

  return population;
};

export const getFilterPopulationSevice = async () => {
  const sql = "SELECT * FROM population_filter";

  const [population] = await pool.query(sql);

  return population;
};

export const getViewFilterSevice = async () => {
  const sql = "SELECT * FROM view_filter";

  const [population] = await pool.query(sql);

  return population;
};
