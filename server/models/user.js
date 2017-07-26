const mongoose = require("mongoose") 

const UserSchema = mongoose.Schema({
    name: String,
    score: Number
}, {timestamps: true})

mongoose.model("User", UserSchema)