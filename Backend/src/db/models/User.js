const mongoose = require("mongoose");

const userOptions = {
    discriminatorKey: "role",
    collection: "users"
}

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["client", "contractor"],
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        match: [ /\S+@\S+\.\S+/, "is invalid" ],
        index: true,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        match: [ /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, "is invalid"],
        required: true
    },
    avatarURI: {
        type: String,
        default: "https://cdn.discordapp.com/embed/avatars/0.png"
    }
}, userOptions)

const User = new mongoose.model("User", userSchema);

module.exports = User;