const router = require("express").Router();
const clients = require("../controllers/clients");

//Get All
router.get("/", clients.getClients);

//Get One by id
router.get("/getById", clients.getClientById);

//Get One by email
router.get("/getByEmail", clients.getClientByEmail);

//Create client
router.post("/create", clients.createClient);

//Delete client
// router.post("/delete", clients.deleteClient);

const clientsRouter = router;
module.exports = clientsRouter;
