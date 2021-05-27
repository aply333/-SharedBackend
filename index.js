const express = require('express')
const bodyParser = require("body-parser")

const focusedKanban = require('./focusedKanban/rootRoutes')

const server = express()
const port = 5000

let debug = true
function logger(req, res, next){
    console.log(`${Date.now()}: ${req.method} at ${req.url}`)
    next()
}

if(debug===true){
    server.use(logger)
}
server.use(bodyParser.json())
server.use("/focusedKanban", focusedKanban)


server.get("/", (req, res) => {
    res.status(200).json({location: "Backend Root"})
})
server.listen(port, ()=>{
    console.log(`SERVER is on port: ${port}`)
})