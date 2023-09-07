const expressAsyncHandler = require('express-async-handler');
const  addPet  = require('./addPet');
// const { removeMyPet } = require('./removeMyPet');
// const { getMyPet } = require('./getMyPet');
// const { addAvatar } = require('./addAvatar');


module.exports = {
  addPet: expressAsyncHandler(addPet),
  // removeMyPet,
  // getMyPet,
  // addAvatar,
};
