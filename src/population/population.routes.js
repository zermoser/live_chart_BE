import { Router } from 'express';
import { getAllPopulation } from './population.controller.js';

const router = Router();

router.get('/getPopulation', getAllPopulation);

export default router;
