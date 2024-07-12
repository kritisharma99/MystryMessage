import mongoose, {Schema, Document} from "mongoose";

//Interface
export interface Message extends Document {
    content : string;
    createdAt: Date;
}

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    isVerfied: boolean;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    messages: Message[];
}
//Schemas
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
})
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    verifyCode: {
        type: String,
        required: [true, "Please provide a verify code"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    verifyCodeExpiry: {
        typr: Date,
        required: true
    },
    isAcceptingMessage: {
        type: Boolean,
        default: false
    },
    messages: [MessageSchema]
    // isAdmin: {
    //     type: Boolean,
    //     default: false,
    // },
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date,
})

const UserModal = mongoose.models.Users as mongoose || mongoose.model("Users", UserSchema);

export default UserModal;