const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const router = require('./routes')
const session = require('./middleware/session')

const app = express()
app.use(express.json())

// if behind a proxy, uncomment this
// server.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, '../build')))
app.use(express.static(path.join(__dirname, '../src/resources')))

app.use(session)
app.use(router)
app.listen(port, () => console.log(`server is running on port ${port}`))
