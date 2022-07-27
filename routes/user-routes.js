const router = require('express').Router();

const { 
    getUsers,getOneUser,createUser,updateUser,deleteUser
}=require('../controllers/user')

router.route('/',getUsers);

module.exports=router;