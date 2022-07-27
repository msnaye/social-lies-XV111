const {User,Thoughts}=require('../models')

const userControllers = {
    getUsers(req,res){
        User.find()
        .then((user)=> res.json(user))
        .catch((err)=>res.json(err))
    },
    getOneUser(req, res){

        User.findOne({_id:req.params.id})
        .then((user)=> res.json(user))
        .catch((err)=>res.json(err))
    },
    createUser(req,res){
        User.create(req.body)
        .then((user)=> res.json(user))
        .catch((err)=>res.json(err))
    },
    updateUser(req,res){
        User.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )
        .then((user)=> res.json('user has been updated'))
        .catch((err)=>res.json(err))
    },
    deleteUser(req,res){
        User.findOneAndDelete({_id:req.params.id})
        .then((user)=> res.json('user deleted'))
        .catch((err)=>res.json(err))
    }
}
module.exports=userControllers