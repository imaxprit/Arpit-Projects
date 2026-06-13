const express = require("express");
const router = express.Router();

// Index 
router.get("/", (req, res) => {
    res.send("GET For posts");
});

// Show 
router.get("/:id", (req, res) => {
    res.send("GET for show posts");
});

// POST 
router.post("/", (req, res) => {
    res.send("POST for post id");
});

// DELETE 
router.delete("/:id", (req, res) => {
    res.send("DELETE for post Id");
});

module.exports = router;
