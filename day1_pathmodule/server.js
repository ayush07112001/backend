import http from 'http'
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=='/'){
        res.end('you are in home route')
    }
    else if(req.url=='/arjit'){
        res.end("we dont have any arjit singh song")
    }
    else{
        res.end("invalid request")
    }
})
const port=2000
server.listen(port,()=>console.log(`server is running on port ${port}`))
