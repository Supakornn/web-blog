const slugify = require("slugify");
const Blogs = require("../models/blogs");
const { v4: uuidv4 } = require("uuid");
exports.create = (req, res) => {
    const { title, content, author } = req.body;
    let slug = slugify(title);

    if (!slug) {
        slug = uuidv4();
    }

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

exports.removeBlog = (req, res) => {
    const { slug } = req.params;
    Blogs.findOneAndRemove({ slug }).exec((err, blog) => {
        if (err) console.log(err);
        res.json({
            message: "Remove complete!"
        });
    });
};

exports.updateBlog = (req, res) => {
    const { slug } = req.params;
    const { title, content, author } = req.body;
    Blogs.findOneAndUpdate(
        { slug },
        { title, content, author },
        { new: true }
    ).exec((err, blog) => {
        if (err) console.log(err);
        res.json(blog);
    });
};
