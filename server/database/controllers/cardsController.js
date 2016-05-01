import { MongoClient } from 'mongodb';

let cardsController = function*(req, res) {
  // console.log('REQ:', req);

  // Connection URL
  const url = 'mongodb://localhost:27017/cardsAPI';

  // Use connect method to connect to the Server
  const db = yield MongoClient.connect(url);

  // Retrieve cards
  let col = db.collection('decks');
  console.log('col:', col);
  let cards = yield col.find().toArray();

  db.close();

  return cards;
};

export default cardsController;
