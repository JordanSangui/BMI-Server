import app from '@adonisjs/core/services/app';
import Ws from '#services/Ws';
app.ready(() => {
    Ws.boot();
    Ws.io?.on('connection', (socket) => {
        console.log(socket.id);
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', (data) => {
            console.log(data);
        });
    });
});
//# sourceMappingURL=socket.js.map