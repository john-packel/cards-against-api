
import uuid from 'node-uuid';

let helpers = {};

helpers.generateAPIKeyPair = () => {
  const keys = {
  	id: uuid.v4(),
  	secret: uuid.v4()
  };
  return keys;
};

helpers.generateEncodedKey = (creds) => {
  const encodedCreds = new Buffer(creds.id + ':' + creds.secret).toString('base64');
  return encodedCreds;
}

helpers.generateDecodedKey = (creds) => {
  // creds is an array 
  const encoded = creds.split(' ')[0];
  const decoded = new Buffer(encoded, 'base64').toString('utf8');

  const keys = {
    id: decoded.split(':')[0],
    secret: decoded.split(':')[1]
  }
  return keys;
}

export default helpers;