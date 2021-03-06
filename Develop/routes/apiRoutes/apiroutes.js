
//API ROUTES
// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
let notes = require("../../db/db.json");
const fs = require('fs');
const path = require("path");



module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        console.log("successful get");
        res.json(notes);
        console.log(notes);
    });


    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        console.log("successful API hit");
        console.log(newNote);
        });
    
    };



