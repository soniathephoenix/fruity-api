const express = require('express')
const app = express()

const logger = require("./logger")

//Middleware
app.use(express.json())
app.use(logger)

const fruitsRouter = require("./routes/fruits")

app.get('/', (req, res) => {
  res.send('Hello fruity')
})

app.use("/fruits", fruitsRouter)


module.exports = app








