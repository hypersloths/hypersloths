'use strict';

const mastercardRouter = require('express').Router(); // eslint-disable-line new-cap
const mastercardPayment = require('./MasterCardPaymentResource');

mastercardRouter.route('/payment')
  .post(mastercardPayment.createPayment);

module.exports = mastercardRouter;
