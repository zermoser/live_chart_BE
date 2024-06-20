import { getAllPopulationSevice, getFilterPopulationSevice, getViewFilterSevice } from './population.service.js';

export const getAllPopulation = async (req, res, next) => {
  try {
    const data = await getAllPopulationSevice();
    res.status(200).send({
      population: data,
    });
  } catch (error) {
    next(error);
  }
};

export const getPopulationFilter = async (req, res, next) => {
  try {
    const data = await getFilterPopulationSevice();
    res.status(200).send({
      population: data,
    });
  } catch (error) {
    next(error);
  }
};


export const getViewFilter = async (req, res, next) => {
  try {
    const data = await getViewFilterSevice();
    res.status(200).send({
      population: data,
    });
  } catch (error) {
    next(error);
  }
};

