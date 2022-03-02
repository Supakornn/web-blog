# Web-blogs

This project made with React.JS

![image](https://cdn.discordapp.com/attachments/925063485556150292/946109065598222356/unknown.png)

# Install
```
npm install
```

# Example

```js
// Blog Schema
const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: {},
      required: true
    },
    author: {
      type: String,
      default: "Admin"
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Blogs", blogSchema);
```
ZZZZZ
