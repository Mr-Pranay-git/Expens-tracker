import {model, Schema} from 'mongoose';

const userSchema = new Schema({
    fullName:{
        require:true,
        lowercase: true,
    },
    mobile:{
        required: true,
        unique: true,
        trim: true
    },
    email:{
        required: true,
        unique: true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        trim:true
    },
    status:{
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        default: user,
        enum:['user'],

    }
}, {timestamps: true})

const UserModel = model('User', userSchema);
module.exports = User