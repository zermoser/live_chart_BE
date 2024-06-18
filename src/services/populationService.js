import fs from 'fs';
import path from 'path';

class PopulationService {
  constructor() {
    this.dataFilePath = path.join(path.resolve(), 'db.json');
  }

  async getPopulationData(year) {
    try {
      const data = await fs.promises.readFile(this.dataFilePath, 'utf8');
      const populationData = JSON.parse(data).population;
      return populationData.filter(entry => parseInt(entry.Year) === year);
    } catch (error) {
      console.error('Error reading data file:', error);
      throw new Error('Error fetching population data');
    }
  }
}

export default new PopulationService();
