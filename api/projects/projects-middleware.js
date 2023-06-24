const projectModel = require("./projects-model");

async function validateProjectId(req,res,next){
    try {
        const existProject = await projectModel.get(req.params.id);
        if(!existProject){
            res.status(404).json({message:"project not found"});
        }else{
            req.existProject = existProject;
            next();
        }
    } catch (error) {
        next(error);
    }
}

function validateProjectPayload (req,res,next){
    try {
        const {name,description} = req.body;
        if(!name || !description){
            res.status(400).json({message:"missing fields"});
        }else{
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    validateProjectId,
    validateProjectPayload
}