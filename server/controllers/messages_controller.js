let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let {text, time} = req.body;
        messages.push({id, text, time});
         id++;
         res.status(200).send(messages)
    },
    read: (req, res) => {
        return res.status(200).send(messages);

    },
    update: function(req, res) {
        const { text } = req.body;
        const updateID = +req.params.id;
        // const messageIndex = messages.findIndex( message => message.id == updateID );
        // let message = messages[messageIndex];
        
        // messages[ messageIndex ] = {
        // id: message.id,
        // text: text || message.text,
        // time: message.time
        // };

        // res.status(200).send( messages );
        for(let i=0; i<messages.length; i++){
            if(messages[i].id === updateID){
                messages[i].text = text;
                return res.status(200).send(messages);
            }
        }
    },
    delete: function(req, res) {
        let deleteID = +req.params.id;
        for(let i=0; i<messages.length; i++){
            if(messages[i].id === deleteID){
                messages.splice(i,1)
                return res.status(200).send(messages);
            }
        }

    }
}