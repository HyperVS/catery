const Event = require("../db/models/Event");
const Client = require("../db/models/Client");

const ServerError = require("../helpers/ServerError");
const { isObjectIdValid } = require("../helpers/isObjectIdValid");

//Get all events
exports.getEvents = async (_, res, next) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        next(error);
    }
};

//Get one event by ID
exports.getEventById = async (req, res, next) => {
    try {
        if (!isObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const event = await Event.findOne({ _id: req.query.id });
        if (!event) throw new ServerError("event not found", 404);

        res.send(event);
    } catch (error) {
        next(error);
    }
};

//Get all events by user id (host)
exports.getEventsByUserId = async (req, res, next) => {
    try {
        if(!isObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const events = await Event.find({hostId: req.query.id})
        res.send(events);

    } catch (error) {
        next(error);
    }
};

//Create an event
exports.createEvent = async (req, res, next) => {
    try {
        console.log(typeof req.body.capacity)
        if (!req.body.name || typeof req.body.name !== "string") throw new ServerError("name is invalid", 400);
        if (!req.body.date || typeof req.body.date !== "string") throw new ServerError("date is invalid", 400);
        if (!req.body.location || typeof req.body.location !== "string") throw new ServerError("locaton is invalid", 400);
        if (!req.body.capacity || isNaN(req.body.capacity)) throw new ServerError("capacty is invalid", 400);
        if (!req.body.requests || typeof req.body.requests !== "object") throw new ServerError("requests are invalid", 400);
        if (!req.body.hostId || typeof req.body.hostId !== "string") throw new ServerError("hostId is invalid", 400);

        //Check if host exists
        const client = Client.findOne({_id: req.body.hostId});
        if (!client) throw new ServerError("client not found", 404);

        const newEvent = new Event({
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            capacity: req.body.capacity,
            requests: req.body.requests,
            hostId: req.body.hostId
        });
        const createdEvent = await newEvent.save();
        res.status(201).send(createdEvent);
    } catch (error) {
        next(error);
    }
};

exports.deleteEvent = async (req, res, next) => {
    try {
        if (!isObjectIdValid(req.body.id)) throw new ServerError("id is invalid", 400);

        //Check if event exists
        const event = await Event.findOne({_id: req.body.id});
        if (!event) throw new ServerError("event not found", 404);

        await Event.findOneAndDelete({ _id: req.body.id });

        res.status(200).send(event);
    } catch (error) {
        next(error);
    }
};
