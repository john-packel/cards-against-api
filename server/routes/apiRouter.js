import { Router } from 'express';
import co from 'co';

// Controllers
import cardsController from './../database/controllers/cardsController';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  co(cardsController.fetchCards(req, res)).then(val => {
    console.log('Sending:', val);
    res.send(val);
  }).catch((err) => {
    console.log(err.stack);
  });
});

export default apiRouter;
