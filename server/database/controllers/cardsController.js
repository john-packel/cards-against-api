import { MongoClient } from 'mongodb';

const cardsController = {
  * fetchCards(req, res) {
    console.log('controller params:', req.cahapi_settings);

    // Connection URL
    const url = 'mongodb://localhost:27017/cardsAPI';

    // Use connect method to connect to the Server
    const db = yield MongoClient.connect(url);

    // Retrieve cards
    let col = db.collection('decks');
    let cards = yield col.find().toArray();

    // Sample Query;
    // let cards = yield col.find({ deckname: "Base" }, { deckname: 0, whitecards: 0, blackcards: { $slice: -2 } }).toArray();

    db.close();

    return cards;
  }
};

export default cardsController;
