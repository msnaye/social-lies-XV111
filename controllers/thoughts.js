const {User, Thought}=require('./models')

const thoughtControllers={
    getThoughts(req,res){
        Thought.find()
        .then((thoughts)=> res.json(thoughts))
        .catch((err)=>res.json(err))  
    },
    getOneThought(req,res){
        Thought.findOne({_id:req.params.id})
        .then((thought)=> res.json(thought))
        .catch((err)=>res.json(err))  
    },
    createThought(req,res){
        Thought.create(req.body)
        .then((thought)=>{
            return User.findOneAndUpdate({_id:req.params.userId},
                {$addToSet:{thoughts: thought._id}},
                {new:true}
                )
        })
        .then((thought)=> res.json(thought))
        .catch((err)=>res.json(err))  
    },
    updateThought(req,res){
        Thought.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )
        .then((thought)=> res.json('thought has been updated'))
        .catch((err)=>res.json(err))  
    },
    deleteThought(req,res){
        Thought.findOneAndDelete({_id:req.params.id})
        .then((thought)=> res.json('thought has been deleted'))
        .catch((err)=>res.json(err))  
    }
}
module.exports=thoughtControllers