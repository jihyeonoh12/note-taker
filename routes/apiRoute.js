var storedData = require("../db/db.json");
console.log(storedData);

module.exports = function(app) {
    
    app.get("/api/notes"), function(req, res) {
        res.json(storedData);
        
    }


};

