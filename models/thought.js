const { Schema, model, Types} = require('mongoose');

const ReactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default:()=> new Types.ObjectiId()
    },
    reactionBody:{
        type: String, 
        required:true,
        trim: true
    },
    username:{
        type:String, 
        required: true,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
    
})

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String, 
        required: true,
        min: 1, 
        max: 280
    },
    createdAt:{
        type: Date, 
        required: Date.now
    },
    username:{
        type: String, 
        required: true,
        trim: true
    },
    reaction: [ReactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: tru
    },

}
})