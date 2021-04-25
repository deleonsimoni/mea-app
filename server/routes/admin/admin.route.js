const express = require('express');
const passport = require('passport');
const router = express.Router();

const curriculumRoutes = require('./curriculum.route');
const liveRoutes = require('./live.route');
const mediaRoutes = require('./media.route');
const researchProjectRoutes = require('./research-project.route');
const completedGuidelinesRoutes = require('./completed-guidelines.route');

// router.use(passport.authenticate('jwt', { session: false }))
router.use('/curriculum', curriculumRoutes);
router.use('/lives', liveRoutes);
router.use('/media', mediaRoutes);
router.use('/research-project', researchProjectRoutes);
router.use('/completed-guidelines', completedGuidelinesRoutes);

module.exports = router;
