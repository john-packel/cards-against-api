import { Router } from 'express';
import cardsController from './../database/controllers/cardsController';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {

  res.send('Hello from apiRouter');
});

export default apiRouter;
