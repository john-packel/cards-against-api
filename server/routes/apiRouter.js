import { Router } from 'express';
import co from 'co';

// Controller
import cardsController from './../database/controllers/cardsController';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  co(cardsController(req, res)).then(val => {
    console.log('in route', val.length)
  }).catch((err) => {
    console.log(err.stack);
  });

  res.send('Hello from apiRouter');
});

export default apiRouter;
