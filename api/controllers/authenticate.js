'use strict';

const jwt = require('jsonwebtoken');

exports.authenticate = function(req, res) {
  let user = {
    username: 'adiedx',
    email: 'adi.sivasankaran@gmail.com'
  };

  let token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 4000 });

  res.json({
    success: true,
    token: token
  });
};
