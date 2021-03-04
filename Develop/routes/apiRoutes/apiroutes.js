
//API ROUTES
// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
const data = require("../../db/db.json");
const fs = require('fs');
const path = require("path");
// const uuid = require("uuid");


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(data);
    });



    //POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

    app.post("/api/notes", function (req, res) {
        const newNote = req.body;
        //set unique IDs using the UUID module
        // newNote.id = uuid.v4();
        data.push(newNote);
        console.log(data);
        fs.writeFileSync(
            path.join(__dirname, '../../db.json'),
            JSON.stringify(data)
        );
        res.json(newNote);
        console.log(newNote);
    });

};



