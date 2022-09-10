const Client = require("../db/models/Client");
const User = require("../db/models/User");
const admin = require("../../config/firebase/admin");
const ServerError = require("../helpers/ServerError");
const { isUserObjectIdValid } = require("../helpers/isObjectIdValid");

//Get all clients
exports.getClients = async (_, res, next) => {
    try {
        const clients = await Client.find();
        res.send(clients);
    } catch (error) {
        next(error);
    }
};

//Get one client by ID
exports.getClientById = async (req, res, next) => {
    try {
        if (!isUserObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const client = await Client.findOne({ _id: req.query.id });
        if (!client) throw new ServerError("client not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};

//Get client by email
exports.getClientByEmail = async (req, res, next) => {
    try {
        if (!req.query.email || typeof req.query.email !== "string") throw new ServerError("email is invalid", 400);

        const user = await User.findOne({ email: req.query.email });
        if (!user) throw new ServerError("user not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};

//Create a user
exports.createClient = async (req, res, next) => {
    try {
        if (!req.body.email || typeof req.body.email !== "string") throw new ServerError("email is invalid", 400);
        if (!req.body.password || typeof req.body.password !== "string") throw new ServerError("password is invalid", 400);
        if (!req.body.displayName || typeof req.body.displayName !== "string") throw new ServerError("displayName is invalid", 400);
        if (!req.body.phone || typeof req.body.phone !== "string") throw new ServerError("phone is invalid", 400);

        // Check if email already exists
        const checkEmail = await User.findOne({ email: req.body.email });
        if (checkEmail != null) throw new ServerError("email already exists", 409);

        const firebaseResult = await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            disabled: false
        });
        const newClient = new Client({
            _id: firebaseResult.uid,
            email: req.body.email,
            displayName: req.body.displayName,
            phone: req.body.phone
        });
        const createdClient = await newClient.save();
        res.status(201).send(createdClient);
    } catch (error) {
        next(error);
    }
};


