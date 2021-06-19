const path = require("path");

module.exports = function(app) {
    // GET index.html page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // GET when either "continue workout" or "new workout" is chosen
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // GET stats page when dashboard is chosen
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })
}