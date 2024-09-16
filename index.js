require('dotenv').config() 
const express = require('express')
// import express from 'express'  -> also works
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

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})