const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
    login: (req, res) => {
        User.findOne({name: req.body.name})
            .then(data =>{
                if(data){
                    req.session.user_id = data._id
                    res.json(true)
                } else{
                    let new_user = new User({name: req.body.name})
                    new_user.save()
                        .then(() => {
                            req.session.user_id = new_user._id
                            res.json(true)
                        })
                        .catch(err => res.status(500).json(err))
                }
            })
            

    },
    index: (req, res) => {
        User.find()
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
    },
    logged_user: (req, res) => {
        if(req.session.user_id){
            User.findOne({_id: req.session.user_id})
                .then(user => res.json(user))
                .catch(err => res.status(500).json(err))
        } else{
            res.json(false)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },
    deleteUser: (req, res) =>{
        User.findOne({_id: req.params.id}) //find the user that we want to del
            .then(user => user.remove())  // remove the user we want to del
            .then(user =>res.json(user))  //send the response 
            .catch(err => res.status(500).json(err)) //if error send error res
    }

    // deleteUser2: async (req, res) => {
    //     try {
    //         let user = await User.findOne({_id: req.params.id});
    //         await user.remove();
    //         res.json(user);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }
    
}