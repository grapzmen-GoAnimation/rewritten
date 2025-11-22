app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://grapzmen-goanimation.github.io");
    next();
});
