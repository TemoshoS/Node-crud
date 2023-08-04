const http = require('http')

const fs = require('fs')

const server = http.createServer((req,res)=>{
   

    res.setHeader('Content-Type', 'text/html')
    

    //sending back html file
    
})

const port  = 8000;
server.listen(port,'localhost',()=>{
    console.log(`Listening request on port ${port}`)
})