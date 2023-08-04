const http = require('http')

const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type:')


})

const port = 8000;
server.listen(port,'localhost',()=>{

    console.log(`Listening request on port ${port}`)

})