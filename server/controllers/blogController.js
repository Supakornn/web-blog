const slugify = require("slugify");
const Blogs = require("../models/blogs");
exports.create = (req, res) => {
    const { title, content, author } = req.body;
    const slug = slugify(title);

    //validate
    switch (true) {
        case !title:
            return res.status(400).json({ error: "Please enter title!" });
        case !content:
            return res.status(400).json({ error: "Please enter content!" });
    }
    Blogs.create({ title, content, author, slug }, (err, blog) => {
        if (err) {
            res.status(400).json({ error: "Duplicate blog" });
        }
        res.json(blog);
    });
};
