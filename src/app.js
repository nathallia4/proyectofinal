const express = require('express');
const morgan = require('morgan');

const app = express()
app.set('port',process.env.PORT || 5000)

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/employees", require('./routes/employee.routes'))
module.exports = app;