const httpErrorHandler = (res, err) => {
  if (err[0]) {
    res.status(500).send({ success: false, mssg: 'Internal Server Error' });
  } else {
    res.status(err[2]).send({ success: false, mssg: err[1] });
  }
};

module.exports = { httpErrorHandler };
