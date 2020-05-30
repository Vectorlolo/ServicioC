const mongoose = require('mongoose')
const { Schema } = mongoose;


const UserSchema = new Schema({
    user: {type:String ,required:true, unique:true },
    password:{type:String, required:true},
    question:{type:String,required:true},
    answer:{type:String,required:true},
    role: {type: String,default: 'USER_ROLE',
    enum: ['ADMIN_ROLE', 'USER_ROLE']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User',UserSchema)