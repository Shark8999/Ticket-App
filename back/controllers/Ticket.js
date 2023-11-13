import Ticket from '../models/Ticket.js'

export const getTickets = async (req, res) => {
  const response = await Ticket.find({})
  res.status(200).json(response)
}
export const getTicket = async (req, res) => {
  const id = req.params.id
  const response = await Ticket.findById(id)
  res.status(200).json(response)
}
export const updateTicket = async (req, res) => {
  const body = req.body
  const id = req.params.id
  const response = await Ticket.findByIdAndUpdate(id, body)
  res.status(202).json(response)
}
export const deleteTicket = async (req, res) => {
  const id = req.params.id
  const response = await Ticket.findByIdAndDelete(id)
  res.status(202).json({ msg: `Ticket with id ${id} deleted` })
}
export const createTicket = async (req, res) => {
  const body = req.body
  const response = await Ticket.create(body)
  res.status(202).json(response)
}
