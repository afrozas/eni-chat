var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var fs = require('fs');
var util = require('util');
var favicon = require('serve-favicon');
app.use(express.static(__dirname + '/public'));
/*app.use('/scripts', express.static(__dirname + '/bootstrap/css/bootstrap.css'));
app.use('/scripts', express.static(__dirname + '/bootstrap/css/bootstrap-theme.css'));
app.use('/scripts', express.static(__dirname + '/bootstrap/js/bootstrap.js'));
app.use('/scripts', express.static(__dirname + '/jquery.js'));*/
//app.use(favicon(path.join(__dirname,'favicon.ico')));//experimental

/*var filename = 'log_' + (((new Date()).toUTCString()).replace(/[^a-z\d]+/gi, "")) + '.txt';
var logFile = fs.createWriteStream(__dirname + '/logs/' + filename, {
    flags: 'a'
});
var logStdout = process.stdout;*/
// error in deploying on heroku :: commented out logging 

var queue = [];
var rooms = {};
var names = {};
users = [];
connections = [];
addresses = [];

/*console.log = function() {
    logFile.write(util.format.apply(null, arguments) + '\n');
    logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;*/

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client.html');
});

var lookForPeer = function(socket) {
    if (typeof queue != "undefined" && queue != null && queue.length > 0) {
        if (queue[queue.length - 1] != socket) {
            var peer = queue.pop();
            if ((names[peer.id]) && (names[socket.id])) {
                var room = socket.id + '#' + peer.id;
                peer.join(room);
                socket.join(room);
                rooms[peer.id] = room;
                rooms[socket.id] = room;
                peer.emit('chat start', names[socket.id], names[peer.id]);
                socket.emit('chat start', names[peer.id], names[socket.id]);
            } else {
                queue.push(socket);
                socket.emit('queued');
            }
        } else {
            socket.emit('queued');
        }
    } else {
        queue.push(socket);
    }
}

io.sockets.on('connection', function(socket) {
    socket.on('setUsername', function(data, callback) {
        var address = socket.handshake.address;
        if (!(users.indexOf(data) > -1) && (!(addresses.indexOf(address) > -1)) ) {
            callback(true);
            socket.username = data;
            names[socket.id] = data;
            users.push(data);
            addresses.push(address);
            console.log('Connected: %s users are online', users.length);
            console.log('Connected: '+data+'@'+address);
            lookForPeer(socket);
        } else if ((users.indexOf(data) > -1) &&(!(addresses.indexOf(address) > -1)) ) {
            callback(false);
            socket.emit('userExists', data);
            console.log("Disconnected: %s users are online", users.length);
        }
        else if(!(users.indexOf(data) > -1)&&((addresses.indexOf(address) > -1)))
        {
          callback(false);
          socket.emit('portExists', address);
          console.log("Disconnected: %s users are online", users.length);
        }
    });



    socket.on('send message', function(data) {
        console.log(socket.handshake.address + '@' + socket.username + ' : ' + data);
        var room = rooms[socket.id];
        io.sockets.to(room).emit('new message', {
            msg: data,
            user: socket.username
        });
    });

    socket.on('leave room', function() {
        socket.broadcast.to(rooms[socket.id]).emit('chat end', socket.username);
        socket.leave(rooms[socket.id]);
        socket.emit('room exited');

    });

    socket.on('new chat', function() {
        lookForPeer(socket);
    });


    socket.on('disconnect', function() {
        socket.broadcast.to(rooms[socket.id]).emit('chat end', socket.username);
        console.log(socket.username + " : disconnected");
        if (rooms[socket.id] != null)
            socket.leave(rooms[socket.id]);
        delete names[socket.id];
        //queue.splice(queue.indexOf(socket),1);
        users.splice(users.indexOf(socket.username), 1);
        addresses.splice(addresses.indexOf(socket.handshake.address),1);
        console.log("Disconnected: %s users are online", users.length);
    });

});


http.listen(process.env.PORT || 3000, function() {
    console.log('Server running!');
});
