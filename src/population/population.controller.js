import { getAllPopulationSevice } from './population.service.js';

export const getAllPopulation = async (req, res, next) => {
  try {
    const population = await getAllPopulationSevice();
    res.status(200).send({
      population,
    });
  } catch (error) {
    next(error);
  }
};

