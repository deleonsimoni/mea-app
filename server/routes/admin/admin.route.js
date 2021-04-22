const express = require('express');
const passport = require('passport');
const router = express.Router();

const curriculumRoutes = require('./curriculum.route');

// router.use(passport.authenticate('jwt', { session: false }))
router.use('/curriculum', curriculumRoutes);

module.exports = router;
