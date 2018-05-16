const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const messagesCtrl = require('./controllers/messages_controller');


app.use(bodyParser.json());
app.use(express.static('/../public/build' ));

app.post('/api/messages', messagesCtrl.create);
app.get('/api/messages', messagesCtrl.read);
app.put('/api/messages/:id', messagesCtrl.update);
app.delete('/api/messages/:id', messagesCtrl.delete);

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
