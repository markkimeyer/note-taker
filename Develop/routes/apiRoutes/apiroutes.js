
//API ROUTES
// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
let notes = require("../../db/db.json");
const fs = require('fs');
const path = require("path");



module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        // console.log("successful get");
        res.json(notes);
        // console.log(notes);
    });


    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
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
    
    };



//TEST

// module.exports = function (app) {
//     app.get("/api/notes", function (req, res) {
//         console.log("successful get");
// let savedNotes = res.json(notes);
// console.log(savedNotes);
//     });

    
//     app.post("/api/notes", function (req, res) {
//         let newNote = req.body;
//         let stringify = JSON.stringify(newNote);
//         console.log("successful API hit");
//         console.log(stringify);
//         });
    
//     };
