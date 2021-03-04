//express dependencies

var express = require("express");
var app = express();

// const apiRoutes = 
require("./routes/apiRoutes/apiroutes")(app);
const htmlRoutes = 
require("./routes/htmlRoutes");

//for html route
var path = require("path");

//set initial port
var PORT = process.env.PORT || 3030;

//express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set public folder
app.use(express.static('public'));

// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//HTML ROUTES



    //API ROUTES
    //GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
//     let data = require("/db/db.json")
//     app.get("/api/notes", function (req, res) {
//         res.json(data);
//         console.log(data);
//     });

//     //POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

    app.post("/api/notes", function (req, res) {
        data.push(req.body);
        res.json(true);
    });


//     app.post("")

//  };

//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


//listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});