exports.getlinks= async(req, res, next)=>{
    try{
        const genfile = await schemadb.find()
        res.status(200).json(genfile)
    }catch(error){
        res.status(404).send("error" + error)
    }
}
exports.getlink= async(req, res, next)=>{
    try{
        const specfile = await schemadb.findById(req.params.id)
        res.status(200).json(specfile)
    }catch(error){
        res.status(404).send("error" + error)
    }
}
exports.postlink= async(req, res, next)=>{
    const regdata = new schemadb(req.body)
    try {
        const newdata = await regdata.save()
        res.status(201).json(newdata)
    }catch(error){
        res.status(404).send("error" + error)
    }
}
exports.patchlink= async(req, res, next)=>{
    const regdata = new schemadb.findOneAndUpdate(req.body)
    try {
        const newdata = await regdata.save()
        res.status(201).json(newdata)
    }catch(error){
        res.status(404).send("error" + error)
    }
}
exports.deletelink= async(req, res, next)=>{
    const regdata = new schemadb.findOneAndDelete(req.body)
    try {
        const newdata = await regdata.save()
        res.status(201).json(newdata)
    }catch(error){
        res.status(404).send("error" + error)
    }
}