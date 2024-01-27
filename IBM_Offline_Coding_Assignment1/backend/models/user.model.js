const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    avatar:String,
    email:String,
    password:String,
    created_at:String
})

export const UserModel = mongoose.model('user',UserSchema);