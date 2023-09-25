const express = require('express')
const app = express()
const PORT = 3000
/* const patchToPublicFolder = __dirname +'public' */
// ini masih bermaslah

app.use(express.static('public'))


app.get('/index',(req,res)=>{
    res.sendFile('./public/index.html',{root:__dirname})
})

app.listen(PORT,()=>{
    console.log(`contoh app listening at http://localhost:${PORT}`)
})