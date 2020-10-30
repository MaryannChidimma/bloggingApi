const http = require('http');
const port = process.env.PORT|| 3000;

const server = http.createServer(()=>{
console.log('server is life');
})
server.listen(port)