const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')

    let path = './views';

    switch(req.url){
      
        case '/':
        path += '/index.html';
        res.statusCode = 200;
        break;

        case '/about':
        path += '/about.html';
        res.statusCode = 200;
        break;

        default:
        path += '/404';
        res.statusCode = 404;
        break;

    }

    fs.readFile((path),()=>{
        
    })

})

const port = 8000;
server.listen(port,'localhost',()=>{
    console.log(`Listening on port ${port}`)
})