module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

//for example some part of the data is which is requred is not passed it will show th exact error for that otherwise nothing is passed in the res method
