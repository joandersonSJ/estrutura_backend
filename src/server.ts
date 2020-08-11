import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import './database';
import routes from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);

// Catch ALL
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
  next();
});

app.listen(process.env.PORT_SERVER || 3333, () => {
  console.log('🔥 server is running');
});
