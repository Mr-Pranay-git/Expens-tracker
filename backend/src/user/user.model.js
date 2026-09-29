import {model, Schema} from 'mongoose';
import bcrypt from "bcrypt"

const userSchema = new Schema({
    fullName:{
        type: String,
        required: true,
        lowercase: true,
    },
    mobile:{
        type:Number,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
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
        default: 'user',
        enum:['user'],

    }
}, {timestamps: true});

userSchema.pre('save', async function () {
    const hashedPass = await bcrypt.hash(this.password.toString(),12);
    this.password = hashedPass;
})

const UserModel = model('User', userSchema);
export default UserModel;