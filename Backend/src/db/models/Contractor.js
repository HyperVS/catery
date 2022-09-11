const mongoose = require("mongoose");
const User = require("./User");

const contractorSchema = new mongoose.Schema({
    rating: {
        type: String,
    },
    description: {
        type: String,
        // required: true
    },
    clients: {
        type: [{
            type: String,
            ref: "Client",
            required: true,
        }]
    }
})

const Contractor = User.discriminator("Contractor", contractorSchema);

module.exports = Contractor;