const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
res.sendFile(\_\_dirname + '/index.html');
});

io.on('connection', (socket) => {
console.log('a user connected');
});

http.listen(3000, () => {
console.log('listening on \*:3000');
});

ADD IN INDEX BEFORE BODY TAG

<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>

EMIT can be used to send to other users connected.

<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();

  var form = document.getElementById('form');
  var input = document.getElementById('input');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });
</script>
