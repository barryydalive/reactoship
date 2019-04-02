const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../client/build')))

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  const list = [ 'item1', 'item2', 'item3', ]
  res.json(list)
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  // res.send('hi')
  console.log(path.join(__dirname + '../client/build/index.html'))
  console.log('hi')
  // res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
