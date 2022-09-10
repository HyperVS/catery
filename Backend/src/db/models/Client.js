const mongoose = require("mongoose");
const User = require("./User");

const clientSchema = new mongoose.Schema({
    orders: {
        type: [{
            type: String,
            ref: "Event"
        }]
    }
})

const Client = User.discriminator("Client", clientSchema);

module.exports = Client;