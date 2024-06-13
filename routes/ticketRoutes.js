const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { createTicket, getTickets, getTicket, deleteTicket, upadateTicket } = require("../controllers/ticketControllers");

const router = express.Router();

router.route("/").post(createTicket).get(getTickets)
router.route("/:id").get( getTicket).delete( deleteTicket).put(upadateTicket)

module.exports = router; 