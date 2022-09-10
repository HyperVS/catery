const Event = require("../db/models/Event");

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

//Create an event
exports.createEvent = async (req, res, next) => {
    try {
        if (!req.body.name || typeof req.body.name !== "string") throw new ServerError("name is invalid", 400);
        if (!req.body.date || !(req.body.date instanceof Date)) throw new ServerError("role is invalid", 400);
        if (!req.body.password || typeof req.body.password !== "string") throw new ServerError("password is invalid", 400);
        if (!req.body.displayName || typeof req.body.displayName !== "string") throw new ServerError("displayName is invalid", 400);
        if (!req.body.phone || typeof req.body.phone !== "string") throw new ServerError("phone is invalid", 400);
        if (isNaN(req.body.date)) throw new ServerError("date is invalid", 400);

        // Check if email already exists
        const checkEmail = await User.findOne({ email: req.body.email });
        if (checkEmail != null) throw new ServerError("email already exists", 409);

        const firebaseResult = await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            disabled: false
        });
        const newUser = new User({
            _id: firebaseResult.uid,
            email: req.body.email,
            role: req.body.role,
            displayName: req.body.displayName,
            phone: req.body.phone
        });
        const createdUser = await newUser.save();
        res.status(201).send(createdUser);
    } catch (error) {
        next(error);
    }
};
