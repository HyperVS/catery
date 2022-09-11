const router = require("express").Router();

const usersRouter = require("./users");
const clientsRouter = require("./clients");
const contractorsRouter = require("./contractors");
const eventsRouter = require("./events");

router.use("/users", usersRouter);
router.use("/clients", clientsRouter);
router.use("/contractors", contractorsRouter);
router.use("/events", eventsRouter);

module.exports = router;
