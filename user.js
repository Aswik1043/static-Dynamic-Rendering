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
        const pageId = Number(request.params.id)
        
        const userId = listOfUser.find( (user) => user.id == pageId)
    
        if (!userId)
        {
            response.send('Page not found')
        }
        else
        {
            response.json(userId.name)
        }
    })
    
    module.exports = userRouter
