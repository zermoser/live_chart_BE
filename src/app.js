import express from 'express';
import cors from 'cors';
import config from './config.js';
import populationRouter from './population/population.routes.js';

const app = express();
const { env, port, domain } = config.app;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors([domain]));

app.use('/api/', populationRouter);

app.listen(port, () => {
  console.log(`[User population service] run on ${env} env and using port ${port}`);
});
