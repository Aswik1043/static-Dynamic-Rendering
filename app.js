const express = require('express')
const app = express()
const user = require('./user')
app.get('/',(request,response)=>
        response.send('This is App Page'))
        //response.status(404).send("Error"))

app.use('/user',user)
app.listen(1900)