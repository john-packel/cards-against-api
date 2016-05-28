
let helpers = {};

helpers.isBoolean = (val) => {
  return typeof Boolean(val) === "boolean";
};

helpers.isValidInteger = (val) => {
  return typeof val === "number";
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
  return "Parameter cardType must be " + cardTypeList.slice(0,-1).join(', ') + " or " + cardTypeList.slice(-1);
};

helpers.isValidCardRange = (val) => {
  if(helpers.isValidInteger(val) && val >= config["min_cards"] && val <= config["max_cards"]) {
    return true;
  }
  return "Parameter numCards must be integer between " + config["min_cards"] + " and " + config["max_cards"];
};

helpers.isValidPlayerRange = (val) => {
  if(val >= config["min_players"] && val <= config["max_players"]) {
    return true;
  }
  return "Parameter numPlayers must be between " + config["min_players"] + " and " + config["max_players"];
};

helpers.isValidPackName = (packs) => {
  let error = false;
  let isNotValidPackName;

  packs.split(' ').forEach((val) => {
    if(!helpers.isValidString(val) || !config["pack_names"][val]) {
      error = true;
      isNotValidPackName = val;
    }
  });

  let errorMsg = 'Parameter packNames must contain all valid pack names. ' + isNotValidPackName + ' is not a valid pack name.';
  return error ? errorMsg : true; 
};

helpers.validParams = {
  numPlayers: helpers.isValidPlayerRange,
  numCards: helpers.isValidCardRange,
  shuffle: helpers.isBoolean,
  cardType: helpers.isValidCardType,
  packNames: helpers.isValidPackName,
};

export default helpers;

