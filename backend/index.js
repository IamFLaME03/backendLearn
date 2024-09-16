require('dotenv').config() 
const express = require('express')
// import express from 'express'  -> also works but check type:module is in package.json
const app = express()
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/gitHub' , (req, res) =>{
    res.send('IamFLaME is my name!')
})
app.get('/photo' , (req, res) =>{
    res.send('<h1>Wait</h1>')
})
app.get('/data' , (req, res) => {
    const data = [
        {
            'id' : '1',
            'name' : 'kirtan',
            'desc' : 'I am a student'
        },
        {
            'id' : '2',
            'name' : 'sanjay',
            'desc' : 'I am a engineer'
        },
        {
            'id' : '3',
            'name' : 'ainee',
            'desc' : 'I am a postman'
        },
        {
            'id' : '4',
            'name' : 'mayur',
            'desc' : 'I am a co-pilot'
        },
        {
            'id' : '5',
            'name' : 'rajveer',
            'desc' : 'I am a pilot'
        }
    ]
})
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})