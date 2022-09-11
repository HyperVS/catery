const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    requests: {
        food: {
            type: String,
            enum: ["Vegan", "Kosher", "Dairy-Free", "Vegetarian", "Halal", "Keto", "No food", "Other"]
        },
        drinks: {
            type: String,
            enum: ["Hard Drinks", "Soft Drinks", "No Drinks"]
        },
        party: {
            speakers: {
                type: Boolean
            },
            microphone: {
                type: Boolean
            },
            dj: {
                type: Boolean
            },
            discoBall: {
                type: Boolean
            },
            other: {
                type: String
            }
        }
    },
    hostId: {
        type: String,
        ref: "Client",
        required: true
    }
})

const Event = new mongoose.model("Event", eventSchema);

module.exports = Event;