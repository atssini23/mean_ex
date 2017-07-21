const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    q: String,
    answer: String,
   fanswer: String,
   fanswer2: String,
}, { timestamps: true })

mongoose.model("Question", QuestionSchema)