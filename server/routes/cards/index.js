import { Router } from 'express';
import co from 'co';

import cardsController from './../../database/controllers/cardsController';
import queryhelpers from './../../middleware/query.js';
import errorhelpers from './../../middleware/error.js';

const cardsRouter = Router();

cardsRouter.use(queryhelpers.setQueryParams);
cardsRouter.use(queryhelpers.validateQueryParams);
cardsRouter.use(errorhelpers.errorHandler);

cardsRouter.get('/', (req, res) => {
  co(cardsController.fetchCards(req, res)).then(val => {
    res.send(val);
  }).catch((err) => {
    console.log(err.stack);
  });
});

export default cardsRouter;
