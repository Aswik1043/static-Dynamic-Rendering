const express = require('express')
const userRouter = express.Router()
const listOfUser = [
    {
        'id' : '1',
        'name' : 'BMW'
    },
    {
        'id' : '2',
        'name' : 'Audi'
    },
    {
        'id' : '3',
        'name' : 'Benz'
    },
    {
        'id' : '4',
        'name' : 'Jaguar'
    },
    {
        'id' : '5',
        'name' : 'RR'
    }]
    userRouter.get('/',(request,response)=>{
        response.send("This is User Data")
    })
    
    userRouter.get('/:id([0-9]{1})',(request, response)=>{
        response.send(request.user.name)
    })
    userRouter.param('id',(request,response,next,id)=>{
        request.user = listOfUser[id]
        next();
    })
    
    module.exports = userRouter