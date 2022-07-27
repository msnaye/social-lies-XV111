const router = require('express').Router();

const userRouter= require('./user-routes');

router.use('/api/users',userRouter);


module.exports =router;