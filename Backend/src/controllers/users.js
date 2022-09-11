const User = require("../db/models/User");

const ServerError = require("../helpers/ServerError");
const { isUserObjectIdValid } = require("../helpers/isObjectIdValid");

//Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        next(error);
    }
};

//Get one user by ID
exports.getUserById = async (req, res, next) => {
    try {
        if (!isUserObjectIdValid(req.query.id)) throw new ServerError("id is invalid", 400);

        const user = await User.findOne({ _id: req.query.id });
        if (!user) throw new ServerError("user not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};

//Get user by email
exports.getUserByEmail = async (req, res, next) => {
    try {
        if (!req.query.email || typeof req.query.email !== "string") throw new ServerError("email is invalid", 400);

        const user = await User.findOne({ email: req.query.email });
        if (!user) throw new ServerError("user not found", 404);

        res.send(user);
    } catch (error) {
        next(error);
    }
};
