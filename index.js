const express = require('express')
const randomLocation = require('random-location')
const moment = require('moment')
const fetch = require('node-fetch')
const app = express()
const port = process.env.PORT
const P = {
    latitude: 45.888580 , 
    longitude: 3.104450
  }
   

   
   
app.get('/api', (req, res) => {
    let dbCoordinates;
    fetch('https://projectturtle.000webhostapp.com/api/get/')
    .then((respone) => {return respone.json()})
    .then((data) =>{ dbCoordinates = data})
    .then(() => {
        let longitude = Number(dbCoordinates.coordinates.longitude)
        let latitude = Number(dbCoordinates.coordinates.latitude)
        const obj ={
            coordinates : {"latitude" : latitude , "longitude" : longitude} , 
            time: moment().format()
    
    
        }
        res.send(obj)

    })

    

})

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))