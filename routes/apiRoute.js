var storedData = require("../db/db.json");


module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
       return res.json(storedData);
       
    });

    app.post("/api/notes", function(req, res) {
       
        
        console.log(newNote);
        console.log("----");
        console.log(req.body);
        var newNote = req.body;
        storedData.push(newNote);
        res.json(storedData); 

      });

    app.delete("/api/notes", function(req, res) {
      console.log("get delete here");
       var listItemName = req.body;
       console.log(listItemName);
       delete storedData[{listItemName}];
       console.log(storedData);
      
    //    var filtered = storedData.filter(function (listItemName) {
    //      item.noteTitle !== listItemName;
    //     storedData.push(filtered);
      
         return res.json(storedData);

    // });

   

    });

};

