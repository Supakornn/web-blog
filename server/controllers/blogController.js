const slugify = require("slugify");
const Blogs = require("../models/blogs");
exports.create = (req, res) => {
    const { title, content, author } = req.body;
    const slug = slugify(title);

    switch (true) {
        case !title:
            return res.status(400).json({ error: "Please enter title!" });
        case !content:
            return res.status(400).json({ error: "Please enter content!" });
    }
    Blogs.create({ title, content, author, slug }, (err, blog) => {
        if (err) {
            res.status(400).json({ error: "Your blog name already added" });
        }
        res.json(blog);
    });
};

exports.showBlog = (req, res) => {
    Blogs.find({}).exec((err, blogs) => {
        res.json(blogs);
    });
};

exports.showOneBlog = (req, res) => {
    const { slug } = req.params;
    Blogs.findOne({ slug }).exec((err, blog) => {
        res.json(blog);
    });
};
