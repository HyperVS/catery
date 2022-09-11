const Contractor = require("../db/models/Contractor");
const User = require("../db/models/User");
const admin = require("../../config/firebase/admin");

const ServerError = require("../helpers/ServerError");
const { isUserObjectIdValid } = require("../helpers/isObjectIdValid");

//Get all contractors
exports.getContractors = async (_, res, next) => {
    try {
        const contractors = await Contractor.find();
        res.send(contractors);
    } catch (error) {
        next(error);
    }
};

//Get one contractor by ID
exports.getContractorById = async (req, res, next) => {
    try {
        if (!isUserObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const contractor = await Contractor.findOne({ _id: req.query.id });
        if (!contractor) throw new ServerError("contractor not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};

//Get contractor by email
exports.getContractorByEmail = async (req, res, next) => {
    try {
        if (!req.query.email || typeof req.query.email !== "string") throw new ServerError("email is invalid", 400);

        const contractor = await Contractor.findOne({ email: req.query.email });
        if (!contractor) throw new ServerError("contractor not found", 404);

        res.send(contractor);
    } catch (error) {
        next(error);
    }
};

//Create a contractor
exports.createContractor = async (req, res, next) => {
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
        const newContractor = new Contractor({
            _id: firebaseResult.uid,
            email: req.body.email,
            displayName: req.body.displayName,
            phone: req.body.phone
        });
        const createdContractor = await newContractor.save();
        res.status(201).send(createdContractor);
    } catch (error) {
        next(error);
    }
};

