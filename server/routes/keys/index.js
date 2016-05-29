import { Router } from 'express';
import co from 'co';

import keyHelpers from './../../helpers/keysHelpers.js';

const keysRouter = Router();

keysRouter.post('/genkey', (req, res) => {
   return new Promise((resolve) => {
    resolve(keyHelpers.generateAPIKeyPair());
  }).then((val) => {
  	return keyHelpers.generateEncodedKey(val);
  }).then((val) => {
  	return res.status(200).send(JSON.stringify(val));
  }).catch((err) => {
    console.log('err:', err);
    return res.status(550).json(err.message);
  });
});

export default keysRouter;
