const fs = require('fs');
const path = require('path');
const util = require('util');

const usersFolder = path.resolve(__dirname, '../../', 'db/users');

const writeFile = util.promisify(fs.writeFile);
const saveNewUser = (fileName, data) => {
  const src = path.resolve(usersFolder, fileName + '.json');
  const dataSrc = JSON.stringify(data);

  console.log(src);
  return writeFile(src, dataSrc);
};

const createUser = (req, res) => {
  const user = req.body;
  const userData = {...user, id: Math.random()};

  const fileName = userData.userName.toLowerCase() + userData.id;

  const sendResponse = () => {
    res.json({
      status: 'success',
      user: userData,
    })
  };

  const sendError = (err) => {
    console.log(err);
    res.status(400);
    res.json({
      error: 'user was not saved'
    })
  };

  saveNewUser(fileName, userData)
      .then(sendResponse)
      .catch(sendError);
};

module.exports = createUser;
