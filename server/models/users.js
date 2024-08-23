const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        unique:true,
    },

    email:{
        type:String,
        require:true,
        unique:true,
    },

    password:{
        type:String,
        require:true,
    },

    token:{
        type:String,
    }
    
});

const Users = mongoose.model('user',userSchema);

module.exports= Users;