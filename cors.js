app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Dredentials", "true");
    res.header("Access-Control-Allow-Origin", "https://flashthemes.net");
    next();
});
