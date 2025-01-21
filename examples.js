const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home", (req, res)=> {
    res.send({"name": "Sonia"})
})

app.get("/chickens", (req, res)=> {
    res.send("Hello chicken :)")
})

app.get("/chickens/:name",(req, res) => {
    const chickenName = req.params.name
    res.send(chickenName)
} )



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})