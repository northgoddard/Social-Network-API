const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute.js');
const userRoutes = require('./userRoute.js');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;