const express = require("express");
const router = express.Router();
const {
    create,
    showBlog,
    showOneBlog
} = require("../controllers/blogController");
router.post("/create", create);
router.get("/blogs", showBlog);
router.get("/blog/:slug", showOneBlog);

module.exports = router;
