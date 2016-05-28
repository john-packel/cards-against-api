import { MongoClient } from 'mongodb';
import co from 'co';

// Resources
import BaseDeck from './resources/base-deck.json';

export default co(function*() {
  // Connection URL
  const url = 'mongodb://localhost:27017/cardsAPI';

  // Use connect method to connect to the Server
  const db = yield MongoClient.connect(url);

  // Checks whether to hydrate decks collection on initial connect
  let col = db.collection('decks');
  let docs = yield col.find().toArray();

  if(!docs.length){
    let hydrate = yield col.insertOne(BaseDeck);
    console.log('Decks collection hydrated');
  }

  db.close();
}).catch(function(err) {
  console.log(err.stack);
});
