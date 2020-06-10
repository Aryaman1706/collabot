const { isProjectLead } = require('../functions/projectLead');
const { Project } = require('../model/project');

module.exports = function(req, res, next){
    const project = await Project.findById(req.params.id)
    .select('lead');

    if( isProjectLead(project, req.user) ){
        next();
    }else{
        console.log('You are not a project lead');
    };
};