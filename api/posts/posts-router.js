// implement your posts router here
const express = require('express');
const posts = require('./posts-model');

const router = express.Router();

//get all
router.get("/", (req, res) => {
    posts.find()
        .then((resp) => {
            res.status(200).json(resp);
        })
        .catch(() => {
            res.status(500).json({ message: "The posts information could not be retrieved" })
        })
})

//get by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    
    posts.findById(id)
        .then()
        .catch(() => {
            res.status(500).json({ message: "The post information could not be retrieved" })
        })
})

//post
router.post("/", (req, res) => {
    const data = req.body;

    posts.insert(data)
        .then()
        .catch(() => {
            res.status(500).json({ message: "There was an error while saving the post to the database" })
        })
})

//put
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    
    posts.update(id, data)
        .then()
        .catch(() => {
            res.status(500).json({ message: "The post information could not be modified" })
        })
})

//delete
router.get("/:id", (req, res) => {
    const { id } = req.params;
    
    posts.remove(id)
        .then()
        .catch(() => {
            res.status(500).json({ message: "The post could not be removed" })
        })
})

//get comments
router.get("/:id/comments", (req, res) => {
    const { id } = req.params;
    
    posts.findPostComments(id)
        .then()
        .catch(() => {
            res.status(500).json({ message: "The comments information could not be retrieved" })
        })
})

module.exports = router;