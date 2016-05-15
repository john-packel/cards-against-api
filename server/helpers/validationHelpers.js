
let validationHelpers = {};

const config = {
  max_players: 20,
  min_players: 1,
  max_cards: 1000,
  min_cards: 1,
  pack_names: {
    "original": true,
    "expansion one": true,
    "expansion two": true
  }
};

validationHelpers.isBoolean = (val) => {
  return typeof val === "boolean";
};

validationHelpers.isValidInteger = (val) => {
  return typeof val === "number";
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
  return "Parameter cardType must be " + cardTypeList.slice(0,-1).join(', ') + " or " + cardTypeList.slice(-1);
};

validationHelpers.isValidCardRange = (val) => {
  if(validationHelpers.isValidInteger(val) && val >= config["min_cards"] && val <= config["max_cards"]) {
    return true;
  }
  return "Parameter numCards must be integer between " + config["min_cards"] + " and " + config["max_cards"];
};

validationHelpers.isValidPlayerRange = (val) => {
  if(val >= config["min_players"] && val <= config["max_players"]) {
    return true;
  }
  return "Parameter numPlayers must be between " + config["min_players"] + " and " + config["max_players"];
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
  numPlayers: validationHelpers.isValidPlayerRange,
  numCards: validationHelpers.isValidCardRange,
  shuffle: validationHelpers.isBoolean,
  cardType: validationHelpers.isValidCardType,
  packNames: validationHelpers.isValidPackName,
};

export default validationHelpers;

