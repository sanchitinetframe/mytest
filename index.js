const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello! This is the world of Information Technology')
})







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})