const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})