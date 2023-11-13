import express from 'express'

const router = express.Router()

import {
  getTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  createTicket,
} from '../controllers/Ticket.js'

router.route('/ticket').get(getTickets).post(createTicket)
router
  .route('/ticket/:id')
  .get(getTicket)
  .patch(updateTicket)
  .delete(deleteTicket)

export default router
