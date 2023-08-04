const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request made')
    console.log(req.method)
    console.log(req.url)
})

const port  = 8000;
