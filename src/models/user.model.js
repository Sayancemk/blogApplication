import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:5,
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    middleName:{
        type:String,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    lastLogin:{
        type:Date,
        default:Date.now,
    },
    publishedBlog:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
    }],
});

const User=mongoose.model('User',userSchema);

export default User;