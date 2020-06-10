module.exports = function(req, res, next) {
    if(!req.user){
        console.log("You are not logined");
    }else{
        next();
    };
};