const http = require('http')

const fs = require('fs')

const server = http.createServer((req,res)=>{
   

    res.setHeader('Content-Type', 'text/html')
    

    //sending bak html file
    fs.readFile('./views/index.html', (err, data)=>
})

const port  = 8000;
server.listen(port,'localhost',()=>{
    console.log(`Listening request on port ${port}`)
})