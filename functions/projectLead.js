function isProjectLead(project, user){
    if( project.lead.equals(user._id) ){
        return true;
    }else{
        return false;
    };
};

module.exports = isProjectLead;