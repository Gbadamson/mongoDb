const express = require('express');

const link = express.Router()

const schemadb = require('../schemafolder/schema')

// link.get('/', async(req, res)=>{
//     try{
//         const genfile = await schemadb.find()
//         res.status(200).json(genfile)
//     }catch(error){
//         res.status(404).send("error" + error)
//     }
// })
// link.get('/:id', async(req, res)=>{
//     try{
//         const specfile = await schemadb.findById(req.params.id)
//         res.status(200).json(specfile)
//     }catch(error){
//         res.status(404).send("error" + error)
//     }
// })
// link.post('/', async(req, res)=>{
//     const regdata = new schemadb(req.body)
//     try {
//         const newdata = await regdata.save()
//         res.status(201).json(newdata)
//     }catch(error){
//         res.status(404).send("error" + error)
//     }
// })
// link.patch('/:id', async(req, res)=>{
//     const regdata = new schemadb.findOneAndUpdate(req.body)
//     try {
//         const newdata = await regdata.save()
//         res.status(201).json(newdata)
//     }catch(error){
//         res.status(404).send("error" + error)
//     }
// })
// link.delete('/:id', async(req, res)=>{
//     const regdata = new schemadb.findOneAndDelete(req.body)
//     try {
//         const newdata = await regdata.save()
//         res.status(201).json(newdata)
//     }catch(error){
//         res.status(404).send("error" + error)
//     }
// })

const {
    getlinks, getlink, postlink, patchlink, deletelink
} = require('../controllerfolder/control')

link.route('/').get(getlinks).post(postlink)

link.route('/:id').get(getlink).patch(patchlink).delete(deletelink)




module.exports = link