import PopulationService from '../services/populationService.js';

class PopulationController {
  async getPopulationByYear(req, res) {
    const year = parseInt(req.params.year);
    try {
      const data = await PopulationService.getPopulationData(year);
      res.json(data);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
}

export default new PopulationController();
