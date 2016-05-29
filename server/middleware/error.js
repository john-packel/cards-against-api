
let helpers = {};

helpers.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if(err) {
    return res.status(500).json({ error: err.message});
  }
  next();
}

export default helpers;