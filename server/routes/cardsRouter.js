import { Router } from 'express';
import co from 'co';

import cardsController from './../database/controllers/cardsController';
import validationHelpers from './../helpers/validationHelpers';

const cardsRouter = Router();

cardsRouter.use(setQueryParams);
cardsRouter.use(validateQueryParams);

cardsRouter.get('/', (req, res) => {
  co(cardsController.fetchCards(req, res)).then(val => {
    res.send(val);
  }).catch((err) => {
    console.log(err.stack);
  });
});

// Middleware Functions
//-----------------------------------------------------------------------------------
function setQueryParams(req,res,next) {
  let defaultSettings = {
  	numCards: 20,
  	shuffle: false,
  	cardType: "both"
   };
   // allow user parameters to override default parameters 
   req["cahapi_settings"] = Object.assign(defaultSettings, req.query);
   next();
}

function validateQueryParams(req,res,next) {
  let userParams = req.cahapi_settings;

  for(let param in userParams) {
    if(validationHelpers.validParams[param]) {
      // invoke validation function for param value 
      if(!validationHelpers.validParams[param](userParams[param])) {
        // ** invoke error handling function and pass error **
      }
    } 
  } 
  next();
}

export default cardsRouter;
