const { Project } = require('../model/project');
const isTeamMember = require('../functions/teamMember');

module.exports = async (req, res, next)=>{
    const project = await Project.findById(req.params.id)
    .select('team');
    if( isTeamMember(project, req.user) ){
        next();
    }else{
        console.log("You are not a team member");
    }
};