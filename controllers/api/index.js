const router = require('express').Router();
const userRoutes = require('./userRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/users', userRoutes);
router.use('/location', locationRoutes);

module.exports = router;
