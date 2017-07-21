const mongoose = require("mongoose")
const Question = mongoose.model("Question")

module.exports ={
    index: (req, res, next) =>{
        Question.find()
        .then(data => res.json(data))
        .catch(err => {res.status(500).json(err)})
    },
    add: (req, res, next) =>{
        console.log(req.body);
        var newQuestion = new Question(req.body);
        newQuestion.save()
        .then(() =>{
            res.json(true)
        })
        .catch((err) =>{
            res.status(500).json(err)
        })
    }
}