import { MongoClient } from 'mongodb';

const cardsController = {
  * fetchCards(req, res) {
    // Connection URL
    const url = 'mongodb://localhost:27017/cardsAPI';

    // Use connect method to connect to the Server
    const db = yield MongoClient.connect(url);

    // Retrieve cards
    let col = db.collection('decks');
    let cards = yield col.find().toArray();

    db.close();

    return cards;
  }
};



export default cardsController;
