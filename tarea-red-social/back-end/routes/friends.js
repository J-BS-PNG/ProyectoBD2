const express = require('express');
const userModel = require('../models/neo4j')
const router = express.Router();

const friend = express.Router()

friend.get('/friendships/:id', async (req,res)=>{
    const result = await userModel.findById(req.params.id)
    res.json(result)
})
friend.get('/friendshipsRequests/:id', async (req,res)=>{
    const result = await userModel.findRequestById(req.params.id)
    res.json(result)
})
friend.get('/friendshipsRequestsAccept/:id/:id2', async (req,res)=>{
    const result = await userModel.findRequestById(req.params.id, req.params.id2)
    res.json(result)
})

module.exports = friend