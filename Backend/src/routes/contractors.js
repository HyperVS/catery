const router = require("express").Router();
const contractors = require("../controllers/contractors");

//Get All
router.get("/", contractors.getContractors);

//Get One by id
router.get("/getById", contractors.getContractorById);

//Get One by email
router.get("/getByEmail", contractors.getContractorByEmail);

//Create Contractor
router.post("/create", contractors.createContractor);

//Delete Contractor
// router.post("/delete", contractors.deleteContractor);

const contractorsRouter = router;
module.exports = contractorsRouter;
