import { MongoClient } from 'mongodb';
import co from 'co';
import BaseDeck from './resources/base-deck.json';

export default co(function*() {
  // Connection URL
  const url = 'mongodb://localhost:27017/cardsAPI';
  console.log('Connection: Success');

  // Use connect method to connect to the Server
  const db = yield MongoClient.connect(url);

  // Hydrate DB
  const hydrate = yield db.collection('decks').insertOne({basedeck: BaseDeck});

  // Close the connection
  db.close();
}).catch(function(err) {
  console.log(err.stack);
});
