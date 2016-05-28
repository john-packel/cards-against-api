
import config from '../config.js';

let validationHelpers = {};

validationHelpers.isBoolean = (val) => {
  return typeof val === "boolean";
};

validationHelpers.isValidInteger = (val) => {
  return typeof Number(val) === "number";
};

validationHelpers.isValidString = (val) => {
  return typeof val === "string";
};

validationHelpers.isValidCardType = (val) => {
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

validationHelpers.isValidCardRange = (val) => {
  if(validationHelpers.isValidInteger(val) && val >= config["min_cards"] && val <= config["max_cards"]) {
    return true;
  }
  return "Parameter numcards must be integer between " + config["min_cards"] + " and " + config["max_cards"];
};

validationHelpers.isValidPlayerRange = (val) => {
  if(val >= config["min_players"] && val <= config["max_players"]) {
    return true;
  }
  return "Parameter numplayers must be between " + config["min_players"] + " and " + config["max_players"];
};

validationHelpers.isValidPackName = (packs) => {
  let error = false;
  let isNotValidPackName;

  packs.split(' ').forEach((val) => {
    if(!validationHelpers.isValidString(val) || !config["pack_names"][val]) {
      error = true;
      isNotValidPackName = val;
    }
  });

  let errorMsg = 'Parameter packNames must contain all valid pack names. ' + isNotValidPackName + ' is not a valid pack name.';
  return error ? errorMsg : true; 
};

validationHelpers.validParams = {
  numplayers: validationHelpers.isValidPlayerRange,
  numcards: validationHelpers.isValidCardRange,
  shuffle: validationHelpers.isBoolean,
  cardtype: validationHelpers.isValidCardType,
  packnames: validationHelpers.isValidPackName,
};

export default validationHelpers;

