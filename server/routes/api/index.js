import { Router } from 'express';
import co from 'co';

// Controllers
import cardsController from './../../database/controllers/cardsController';
import cardsRouter from './../cards/index.js';
import packsRouter from './../packs/index.js';

const apiRouter = Router();

apiRouter.use('/cards', cardsRouter);
apiRouter.use('/packs', packsRouter);

// apiRouter.get('/', (req, res) => {
//   co(cardsController.fetchCards(req, res)).then(val => {
//     console.log('Sending:', req.cahapi_settings);
//     res.send(val);
//   }).catch((err) => {
//     console.log(err.stack);
//   });
// });

export default apiRouter;
