import { Router } from 'express';
import UserController from '@controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'Hello World !' }).status(200);
});

routes.get('/user', UserController.index);

export default routes;
