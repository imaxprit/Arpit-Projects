const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// Index - users
app.get("/users", (req, res) => {
    res.send("GET For Users");
});

// Show users
app.get("/users/:id", (req, res) => {
    res.send("GET for show users");
});

// POST - users
app.post("/users", (req, res) => {
    res.send("POST for user id");
});

// DELETE - users
app.delete("/users/:id", (req, res) => {
    res.send("DELETE for user Id");
});

// POSTS 
// Index 
app.get("/posts", (req, res) => {
    res.send("GET For posts");
});

// Show 
app.get("/posts/:id", (req, res) => {
    res.send("GET for show posts");
});

// POST 
app.post("/posts", (req, res) => {
    res.send("POST for post id");
});

// DELETE 
app.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post Id");
});



app.listen(3000, () => {
    console.log("server is listening to 3000");
});