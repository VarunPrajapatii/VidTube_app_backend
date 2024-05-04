import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String,  //cloudinary url
        required: true,
    },
    coverImage: {
        type: String,  //cloudinary rul
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            req: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    refreshToken: {
        type: String,
    }

}, {timestamps: true});


export const User = mongoose.model("User", userSchema);