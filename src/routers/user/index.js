const express = require('express');
const getUsers = require('./getUsers');
const getUser = require('./getUser');
const createUser = require('./createUser');


const usersRouter = express.Router();
const middlewareExample = (req, res, next) => {
  if(req.body.userName) {
    next();
    return;
  }

  res.status(400);
  res.json({
    error: 'user has no "userName" field'
  })
};

usersRouter
  .get('/', getUsers)
  .get('/:id', getUser)
    .post('/', middlewareExample, createUser);

module.exports = usersRouter;
