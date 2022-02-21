const express = require("express");
const router = express.Router();
const { create, showBlog } = require("../controllers/blogController");
router.post("/create", create);
router.get("/blogs", showBlog);

module.exports = router;
