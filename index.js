const express = require('express')
const randomLocation = require('random-location')
const moment = require('moment')
const app = express()
const port = 420
const P = {
    latitude: 45.888580 , 
    longitude: 3.104450
  }
   
  const R = 20 // meters
   
   
app.get('/api', (req, res) => {
    const obj ={
        coordinates : randomLocation.randomCirclePoint(P, R) , 
        time: moment().format()


    }
    res.send(obj)

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))