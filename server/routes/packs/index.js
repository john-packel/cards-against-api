import { Router } from 'express';
import co from 'co';

import cardsController from './../../database/controllers/cardsController';
import queryhelpers from './../../middleware/query.js';
import errorhelpers from './../../middleware/error.js';

const packsRouter = Router();

packsRouter.use(queryhelpers.setQueryParams);
packsRouter.use(queryhelpers.validateQueryParams);
packsRouter.use(errorhelpers.errorHandler);

packsRouter.get('/', (req, res) => {
  co(cardsController.fetchCards(req, res)).then(val => {
    res.send(val);
  }).catch((err) => {
    console.log(err.stack);
  });
});

export default packsRouter;
