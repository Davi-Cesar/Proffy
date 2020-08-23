
//Servidor
const express = require('express')
const server = express()


const { pageLandin, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', 
{
    express: server,
    noCache: true,

})

server  
//Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Configura arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Routers da aplicação
.get("/",  pageLandin)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor 
.listen(5500)


