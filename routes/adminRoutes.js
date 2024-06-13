const express = require('express');
const { isAuthorized } = require('../middleware/adminMiddleware');
const { getAllUser, getadminTickets, getadminTicket } = require('../controllers/adminController');

const router = express.Router()

router.get('/users', getAllUser)
router.get('/tickets', getadminTickets)
router.get('/tickets/:id', getadminTicket)

module.exports = router

