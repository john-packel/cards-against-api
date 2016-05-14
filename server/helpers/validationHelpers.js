
let validationHelpers = {};

let config = {
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
  var cardType = {
    white: true,
    black: true,
    both: true
  };

  if(cardType[val.toLowerCase()]) {
    return true;    
  }
  return "Card type must be black or white";
};

validationHelpers.isValidCardRange = (val) => {
  console.log("isvalidcardrange:", val);
  if(validationHelpers.isValidInteger(val) && val >= config["min_cards"] && val <= config["max_cards"]) {
    return true;
  }
  return "Num of cards must be between " + config["min_cards"] + " and " + config["max_cards"];
};

validationHelpers.isValidPlayerRange = (val) => {
  if(val >= config["min_players"] && val <= config["max_players"]) {
    return true;
  }
  return "Num of players must be between " + config["min_players"] + " and " + config["max_players"];
};

validationHelpers.isValidPackName = (packs) => {
  var error = false;
  packs.forEach((val) => {
    if(!validationHelpers.isValidString(val) || !config["pack_names"][val]) {
      error = true;
    }
  });
  return error ? "All pack names must be valid" : true; 
};

validationHelpers.validParams = {
  numPlayers: validationHelpers.isValidPlayerRange,
  numCards: validationHelpers.isValidCardRange,
  shuffle: validationHelpers.isBoolean,
  cardType: validationHelpers.isValidCardType,
  packNames: validationHelpers.isValidPackName,
};

export default validationHelpers;

