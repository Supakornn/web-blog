const express = require("express");
const router = express.Router();
const {
  create,
  showBlog,
  showOneBlog,
  removeBlog,
  updateBlog
} = require("../controllers/blogController");
router.post("/create", create);
router.get("/blogs", showBlog);
router.get("/blog/:slug", showOneBlog);
router.delete("/blog/:slug", removeBlog);
router.put("/blog/:slug", updateBlog);

module.exports = router;
