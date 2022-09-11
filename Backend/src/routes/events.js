const router = require("express").Router();
const events = require("../controllers/events");

//Get All
router.get("/", events.getEvents);

//Get One by id
router.get("/getById", events.getEventById);

//Get all by user id
router.get("/getByUserId", events.getEventsByUserId);

//Create Event
router.post("/create", events.createEvent);

//Delete Event
router.delete("/delete", events.deleteEvent);

const eventsRouter = router;
module.exports = eventsRouter;
