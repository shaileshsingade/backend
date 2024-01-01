
require('dotenv').config()

console.log("shailesh and code")
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/gmail',(req,res) =>{
    res.send("shaileshsingade11@gmail.com")
})
app.get('/login',(req,res) =>{
    res.send('<h1> please login at shailesh website </h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})