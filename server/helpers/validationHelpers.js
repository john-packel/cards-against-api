
import config from '../routes/api/config.js';

let helpers = {};

helpers.isBoolean = (val) => {
  return typeof Boolean(val) === "boolean";
};

helpers.isValidInteger = (val) => {
  return typeof Number(val) === "number";
};

helpers.isValidString = (val) => {
  return typeof val === "string";
};

helpers.isValidCardType = (val) => {
  const cardType = {
    white: true,
    black: true,
    both: true
  };

  // create an array of card types to dynamically generate list of possible card type values in error message
  let cardTypeList = Object.keys(cardType);

  if(cardType[val.toLowerCase()]) {
    return true;    
  }
  return "Parameter cardtype must be " + cardTypeList.slice(0,-1).join(', ') + " or " + cardTypeList.slice(-1);
};

helpers.isValidCardRange = (val) => {
  if(helpers.isValidInteger(val) && val >= config["min_cards"] && val <= config["max_cards"]) {
    return true;
  }
  return "Parameter numcards must be integer between " + config["min_cards"] + " and " + config["max_cards"];
};

helpers.isValidPlayerRange = (val) => {
  if(val >= config["min_players"] && val <= config["max_players"]) {
    return true;
  }
  return "Parameter numplayers must be between " + config["min_players"] + " and " + config["max_players"];
};

helpers.isValidPackName = (packs) => {
  let error = false;
  let isNotValidPackName;
  if(helpers.isValidString) {
    packs.split(' ').forEach((val) => {
      if(!helpers.isValidString(val) || !config["pack_names"][val]) {
        error = true;
        isNotValidPackName = val;
      }
    });
  }
  let errorMsg = 'Parameter packnames must contain all valid pack names. ' + isNotValidPackName + ' is not a valid pack name.';
  return error ? errorMsg : true; 
};

helpers.validParams = {
  numplayers: helpers.isValidPlayerRange,
  numcards: helpers.isValidCardRange,
  shuffle: helpers.isBoolean,
  cardtype: helpers.isValidCardType,
  packnames: helpers.isValidPackName,
};

export default helpers;

