var notesArray = [
    {
        title: "Test Title",
        text: "Test text"
    }
];

module.exports = function (app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesArray);
    });
}





//test 2 but pushes "null" into array

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", 'utf-8', function (err, data) {
        if (err) {
            console.log(err)
        } else {
            const notes = JSON.parse(data);
            res.json(notes);
        }
    });
});



//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

app.post("/api/notes", function (req, res) {
    newnote = req.body;
    data.push(newnote);

    fs.writeFile("./db/db.json", JSON.stringify(data), "utf-8", function (err) {
        if (err) {
            throw err
        };
        console.log(data);
    });
    res.json(data);
});


}
