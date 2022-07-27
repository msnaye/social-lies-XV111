const router = require('express').Router();

const {
    getThoughts, getOneThought, createThought,updateThought,deleteThought
}=require('../../controllers/thoughts')

router.route('/').get(getThoughts)
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)
router.route('/:userId').post(createThought)

module.exports=router;