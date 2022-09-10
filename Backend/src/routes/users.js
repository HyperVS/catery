const router = require("express").Router();
const users = require("../controllers/users");

//Get All
router.get("/", users.getUsers);

//Get One by id
router.get("/getById", users.getUserById);

//Get One by email
router.get("/getByEmail", users.getUserByEmail);

//Delete user
// router.post("/delete", users.deleteUser);

const usersRouter = router;
module.exports = usersRouter;
