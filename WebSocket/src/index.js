const path = require('path')
const express = require('express')
const app = express();
const mongoose = require('mongoose')

//Asignando puerto
app.set('port', process.env.PORT || 3000)

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar servidor
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})

//websockets
const SocketIO = require('socket.io')
const io = SocketIO(server);

//Conecto a la base de datos
mongoose.connect('mongodb://localhost/chat-database').then(db => console.log('La base de datos esta conectada')).catch(err => console.log(err))


require('./sockets')(io)



