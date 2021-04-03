//  CARREGANDO MODULOS
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express()
const path = require('path')
const expressSession = require('express-session');
const connectFlash = require('connect-flash');
const open = require('open');


// CONFIGURAÇÔES
    // SESSÂO
    app.use(expressSession({
        secret: "qualquercoisa",
        resave: true,
        saveUninitialized: true
    }))

    // FLASH
    app.use(connectFlash())

    // MIDDLEWARE
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")
        next();
    })
    // BODY PARSER
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // HANDLE BARS
    app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/blogProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
        }).then(() => {
            console.log('Conexão bem sucedida')
        }).catch((err) => {
            console.log(`Conexão mal sucedida: ${err}`)
        })
    // Public

    app.use(express.static(path.join(__dirname,"public")))

//  ROTAS
    const adminRoutes = require ('./routes/admin')
    app.use('/admin', adminRoutes)
// OUTROS




const PORT = '3333'
app.listen(PORT, () => { 
        console.log(`Node server ON Rodando na porta ${PORT}`)
})