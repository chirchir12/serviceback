const express = require('express');
const User = require('../../models').User;
const EmployerProfile = require('../../models/buyerprofile');
const EmployeeProfile = require('../../models/sellerprofile');

const router = express.Router();
// create user
router.post('/register', (req, res) => {
  return User.create(req.body)
    .then((createdUser) => {
      if (createdUser.isBuyer) {
        EmployerProfile.create({ UserId: createdUser.id });
      } else if (createdUser.isSeller) {
        EmployeeProfile.create({ UserId: createdUser.id });
      }
      return res.status(201).json(createdUser);
    })
    .catch((error) => {
      return res.status(400).json({ message: error.message });
    });
});

module.exports = router;
