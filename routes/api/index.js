const router = require('express').Router();

const userRouter= require('./user-routes');
const thoughts=require('./thought-routes')

router.use('/users',userRouter);
router.use('/thoughts',thoughts);


module.exports =router;