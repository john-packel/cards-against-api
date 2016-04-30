import { MongoClient } from 'mongodb';
import co from 'co';

export default co(function*() {
  // Connection URL
  const url = 'mongodb://localhost:27017/cardsAPI';
  console.log('Connection: Success');

  // Use connect method to connect to the Server
  const db = yield MongoClient.connect(url);

  // Close the connection
  db.close();
}).catch(function(err) {
  console.log(err.stack);
});
