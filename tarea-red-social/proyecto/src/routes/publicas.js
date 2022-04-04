const express = require('express');
const router = express.Router();

const Publicacion = require('../models/Publicaciones')

router.get('/', async (req, res) =>{
    const publicacion = await Publicacion.find();
    res.json(publicacion);

})



router.post('/', async (req, res) =>{
    const publicacion = new Publicacion(req.body);
    await publicacion.save();
    res.json({
        status: 'Publicacion guardada'
    })
})

router.delete('/:id', async (req, res) =>{
    await Publicacion.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'Task Delete'
    })
});
/*
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



});
*/
module.exports = router;