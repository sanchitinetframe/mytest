const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello! This is the world of Information Technology')
})

app.get('/newfun2', (req, res) => {
    res.send('This is new function-2')
  });

  app.get('/newfun3', (req, res) => {
    res.send('This is new function-3')
  });  

  app.get('/newfun4', (req, res) => {
    res.send('This is new function-4')
  });

<<<<<<< HEAD
  app.get('/newfun6', (req, res) => {
    res.send('This is new function-6')
=======
  app.get('/newfun5', (req, res) => {
    res.send('This is new function-5')
>>>>>>> tminor
  });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})