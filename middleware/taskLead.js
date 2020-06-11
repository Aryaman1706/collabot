const { isTaskLead } = require('../functions/taskLead');
const { task, Task } = require('../model/task');

module.exports = function(req, res, next){
    const task = await Task.findById(req.params.id)
    .select('taskLead');

    if( isTaskLead(task, req.user) ){
        next();
    }else{
        console.log('You are not a project lead');
    };
};