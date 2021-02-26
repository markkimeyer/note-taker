//express dependencies

var express = require("express");
var app = express();

//for html route
var path = require("path");

//set initial port
var PORT = process.env.PORT || 3030;

//express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set public folder
app.use(express.static('public'));

//HTML ROUTES

//GET `/notes` - Should return the `notes.html` file.

module.exports = function (app) {

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    
    //GET `*` - Should return the `index.html` file
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};

//API ROUTES
//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


//listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});