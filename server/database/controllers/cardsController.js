import { MongoClient } from 'mongodb';
// import co from 'co';

let cardsController = function*(req, res) {
  console.log('REQ:', req);

  // Connection URL
  const url = 'mongodb://localhost:27017/cardsAPI';

  // Use connect method to connect to the Server
  const db = yield MongoClient.connect(url);

  // Retrieve cards
  let col = db.collection('decks');
  let cards = yield col.find().toArray();

  console.log('cards:', cards);
  // Close the connection
  db.close();

  return cards;
};

export default cardsController;
