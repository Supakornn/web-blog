const express = require("express");
const router = express.Router();
const { requireLogin } = require("../controllers/authController");

const {
  create,
  showBlog,
  showOneBlog,
  removeBlog,
  updateBlog
} = require("../controllers/blogController");
router.post("/create", requireLogin, create);
router.get("/blogs", showBlog);
router.get("/blog/:slug", showOneBlog);
router.delete("/blog/:slug", requireLogin, removeBlog);
router.put("/blog/:slug", requireLogin, updateBlog);

module.exports = router;
