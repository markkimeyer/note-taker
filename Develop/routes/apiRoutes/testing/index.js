var app = require('express');
const routes = require("./apiroutes");
const fs = require("fs");

// router.use(routes);

// const notes = require("../../db/db.json")

// // router.get("/api/notes", function (req, res) {
   
// //     res.json(notes);
// //     console.log(notes);
// // });

// //  POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

router.post("/api/notes", function (req, res) {
    notes.push(req.body);
    res.json(true);
});


// router.post("")

// ;






module.exports =  router;