import 'express-async-error'
import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import Cors from 'cors'
const port = process.env.PORT
import ticketRouter from './routes/Ticket.js'

app.get('/', (req, res) => {
  res.send('Ciao')
})

app.use(express.json())
app.use(Cors())
app.use('/api/v1', ticketRouter)

const start = () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  } catch (error) {
    throw new Error(error)
  }
}
start()
