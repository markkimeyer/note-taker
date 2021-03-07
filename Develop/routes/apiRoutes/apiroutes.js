
//API ROUTES
// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
let notes = require("../../db/db.json");
const fs = require('fs');
const path = require("path");
const { v4: uuidv4 } = require("uuid");


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        // console.log("successful get");
        res.json(notes);
        // console.log(notes);
    });


    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        // let stringify = JSON.stringify(newNote);
        // console.log("successful API hit");
        console.log(newNote);
        notes.push(newNote);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(notes)
          );
          res.json(newNote);
        });
    
    app.delete("/api/notes/:id", function (req, res) {
        const noteId = req.params.id;
        let keepNote = notes.filter((note) => note.id != noteId);
        fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(keepNote), (err) => {
            if (err) {
                throw err;
            }
            });
            res.send(true);
        });
};

