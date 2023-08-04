const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log('request made')
    //console.log(req.method)
    //console.log(req.url)

    res.setHeader('Content-Type', 'text/html')
    

    //sending bak html file
    fs.readFile('./views/index.html')
})

const port  = 8000;
server.listen(port,'localhost',()=>{
    console.log(`Listening request on port ${port}`)
})