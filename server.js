require('dotenv').config();
const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 3003
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.static('public')) //might also be 'files'. ask Arthur or TA

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('It is NOT MANGO'))


app.listen(PORT, () => {
    console.log(`We in the building ${PORT}`)
})
