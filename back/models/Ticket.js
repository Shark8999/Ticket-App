import mongoose from 'mongoose'

const TicketSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Hardware Problem', 'Software Problem'],
    required: true,
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 10,
  },
  status: {
    type: String,
    enum: ['Not Started', 'Started', 'Completed'],
    default: 'Not Started',
  },
})

export default mongoose.model('Ticket', TicketSchema)
