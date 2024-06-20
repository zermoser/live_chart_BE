import { Router } from 'express';
import { getAllPopulation , getPopulationFilter, getViewFilter } from './population.controller.js';

const router = Router();

router.get('/getPopulation', getAllPopulation);
router.get('/getPopulation/filter', getPopulationFilter);
router.get('/getPopulation/viewFilter', getViewFilter);

export default router;
