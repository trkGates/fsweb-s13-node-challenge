// eylemlerle ilgili ara katman yazılımları yazın
const actionsModel = require("./actions-model");
const projectModel = require("../projects/projects-model");

async function validateActionId(req,res,next){
    try {
        let existAction = await actionsModel.get(req.params.id);
        if(!existAction){
            res.status(404).json({message:"Actions not found"})
        }else{
            req.existAction = existAction;
            next();
        }
    } catch (error) {
        next(error);
    }
}

async function validateActionPayload(req,res,next){
    try {
        let {notes,description,project_id} = req.body;
        if(!notes || !description || !project_id){
            res.status(400).json({message:"alanları kontrol ediniz"});
        }else{
            const existProject = await projectModel.get(project_id);
            if(!existProject){
                res.status(400).json({message:"alanları kontrol ediniz"});
            }else{
                next();
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    validateActionId,
    validateActionPayload
}