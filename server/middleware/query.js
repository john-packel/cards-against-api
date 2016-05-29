
import url from 'url';
import defaultSettings from '../routes/api/defaultsettings.js';
import validationHelpers from './../helpers/validationHelpers';

let helpers = {};

helpers.setQueryParams = (req,res,next) => {
  // get the pathname for route after /api 
  let route = req.baseUrl.split('/').pop(); 
  // get the default settings object based on routename 
  // allow user parameters to override default settings 
   req["cahapi_settings"] = Object.assign(defaultSettings[route], req.query);
   next();
}

helpers.validateQueryParams = (req,res,next) => {
  let userParams = req.cahapi_settings;
  let errorMsg; 

  for(let param in userParams) {
    param = param.toLowerCase();
    console.log("param", param);
    if(validationHelpers.validParams[param]) {
      // invoke validation function for param value 
      let isValid = validationHelpers.validParams[param](userParams[param]);
  
      if(isValid !== true) {
        // new Error(isValid)
        return next(new Error(isValid));
      }
    } else {
      errorMsg = param + " is not a valid parameter."
      // new Error("not a valid parameter")
      return next(new Error(errorMsg));
    }
  } 
  next();
}

export default helpers;