const express = require('express')
const axios = require('axios')
const cors = require('cors')

const port = process.env.PORT || 5000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const { url } = req.query
  if (url) {
    axios
      .get(url)
      .then(({ data }) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
  } else {
    res.send('No URL specified.')
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})