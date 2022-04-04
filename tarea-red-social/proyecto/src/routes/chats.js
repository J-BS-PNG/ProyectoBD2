const express = require('express');
const router = express.Router();

const Chat = require('../models/Chat')

router.get('/', async (req, res) =>{
    const chat = await Chat.find();
    res.json(chat);
})

router.get('/:id1/user2/:id2', async (req, res) =>{
    const chat = await Chat.find({user1: req.params.id1});
    console.log(chat);
    res.json(chat);
})

router.post('/', async (req, res) =>{
    const chat = new Chat(req.body);
    await chat.save();
    res.json({
        status: 'Chat guardado'
    })
})

router.put('/:id', async (req, res) =>{
    await Chat.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task Update'
    });

});

router.put('/:id', async (req, res) =>{
    await Chat.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task Update'
    });

});

router.delete('/:id', async (req, res) =>{
    await Chat.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Task Delete'
    });

});

module.exports = router;