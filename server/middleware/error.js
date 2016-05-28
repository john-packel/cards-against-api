
let helpers = {};

helpers.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if(err) {
	console.log('err:', err);
    res.status(500).send({ error: err });
    return; 
  }
  next();
}

export default helpers;