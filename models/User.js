import { Schema , model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 3,
    },
    age: {
        type: Number,
        min: 10,
        max: 50,
    },
    email:{
        type: String,
        required: true
    } ,
    address:{
        city: String,
        street: String,
        alley: String,
    },
    courses:[String],
    createdAt:{
        type: Date,
        default:() =>  Date.now(),
    }
})

const User = models.User || model("User", userSchema)

export default User