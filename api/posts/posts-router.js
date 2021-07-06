// implement your posts router here
const express = require('express');
const posts = require('./posts-model');

const router = express.Router();

//get all
router.get("/", (req, res) => {
    
})

//get by ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    
})

//post
router.get("/", (req, res) => {
    
})

//put
router.get("/:id", (req, res) => {
    const { id } = req.params;
    
})

//delete
router.get("/:id", (req, res) => {
    const { id } = req.params;
    
})

//get comments
router.get("/:id/comments", (req, res) => {
    const { id } = req.params;
    
})

module.exports = router;