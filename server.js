const express = require('express')
const port = process.env.PORT || 3000
const app = express()
app.use(express.static('src'))


app.listen(port, (error) => {
  if (error) {
    console.error(error)
  }
  else {
    console.info('==> 🌎  Listening on port %s.', port)
  }
})
