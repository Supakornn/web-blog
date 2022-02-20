const {connect} = require('mongoose')
const slugify = require('slugify')
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  //validate
  switch (true) {
    case !title:
      return res.status(400).json({ error:"Please enter title!" })
    case !content:
      return res.status(400).json({ error: "Please enter content!" })
  }
  res.json({
    data: { title, content, author, slug }
  })
};
