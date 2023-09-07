const express = require('express');
const { petSchemas } = require('../../models/pet');
const ctrl = require('../../controllers/pet')

const router = express.Router();

const {
  removeMyPet,
  addPet,
  getMyPet,
} = require('../../controllers/pet/index');

const {
  upload,
  validateBody,
  isValidId,
  authenticate,
} = require('../../middlewares/index');

router.post(
  '/',
  authenticate,
  upload.single('petAvatar'),
  validateBody(petSchemas.addPetSchema),
  ctrl.addPet
);
// router.get('/', authenticate, getMyPet);

// router.delete('/:petId', authenticate, removeMyPet);

module.exports = router;