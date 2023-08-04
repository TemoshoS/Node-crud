const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log('request made')
    //console.log(req.method)
    //console.log(req.url)

    res.setHeader('Content-Type', 'text/html')
    res.
})

const port  = 8000;
server.listen(port,'localhost',()=>{
    console.log(`Listening request on port ${port}`)
})