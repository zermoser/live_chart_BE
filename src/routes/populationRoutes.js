import express from 'express';
import PopulationController from '../controllers/populationController.js';

const router = express.Router();

router.get('/population/:year', PopulationController.getPopulationByYear);

export default router;
