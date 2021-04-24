const express = require('express');
const passport = require('passport');
const router = express.Router();

const curriculumRoutes = require('./curriculum.route');
const liveRoutes = require('./live.route');

// router.use(passport.authenticate('jwt', { session: false }))
router.use('/curriculum', curriculumRoutes);
router.use('/lives', liveRoutes);

module.exports = router;
