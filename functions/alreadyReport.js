function alreadyReport(task, id){
    const len = task.reportTo.length;
    var i;
    for( i = len-1; i >=0 ; i--){
        if ( task.reportTo[i].equals(id) ){
            return true;
        };
    }
    if( i<0 ){
        return false
    };
};

module.exports = alreadyReport;