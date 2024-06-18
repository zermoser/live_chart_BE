import express from 'express';
import populationRoutes from './routes/populationRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use population routes
app.use('/api', populationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
