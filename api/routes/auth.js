const express = require('express');
const User = require('../../models').User;
const EmployerProfile = require('../../models').EmployerProfile;
const EmployeeProfile = require('../../models').EmployeeProfile;
const Location = require('../../models').Location;

const router = express.Router();
// create user
router.post('/register', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isEmployee: req.body.isEmployee,
    isEmployer: req.body.isEmployer,
  };
  return User.create(newUser)
    .then((createdUser) => {
      Location.create({ UserId: createdUser.id });
      if (createdUser.isBuyer) {
        EmployerProfile.create({ UserId: createdUser.id });
      } else if (createdUser.isSeller) {
        EmployeeProfile.create({ UserId: createdUser.id });
      }
      return res.status(201).json(createdUser);
    })
    .catch((error) => {
      return res.status(400).json({ error: error });
    });
});

module.exports = router;
