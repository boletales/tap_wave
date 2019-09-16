const app=require('express')();
const http=require('http').createServer(app);
const socketIO=require('socket.io');
const io=socketIO.listen(http);
const _TIMEOUT_SECONDS=240;
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(40);


app.get('/',function(req,res){
    res.sendFile(__dirname+'/docs/index.html');
});
io.on('connection',function(socket){
    socket.on('tap',function(data){
        io.emit("tap",data);
    });
    
});
http.listen(process.env.PORT || 80);
console.log('It works!!');
function randomID(keta){
    return ("0".repeat(keta)+Math.floor(Math.random()*Math.pow(10,keta))).slice(-keta);
}

