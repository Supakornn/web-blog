import { useState, useEffect } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const EditComponent = (props) => {
  const [state, setState] = useState({
    title: "",
    author: "",
    slug: ""
  });
  const { title, author, slug } = state;

  const [content, setContent] = useState("");
  const submitContent = (event) => {
    setContent(event);
  };
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blog/${props.match.params.slug}`)
      .then((response) => {
        const { title, content, author, slug } = response.data;
        setState({ ...state, title, author, slug });
        setContent(content);
      })
      .catch((err) => {
        alert(err);
      });
    // eslint-disable-next-line
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("API", process.env.REACT_APP_API);
    axios
      .put(`${process.env.REACT_APP_API}/blog/${slug}`, {
        title,
        content,
        author
      })
      .then((response) => {
        Swal.fire("Success", "Your blog has been update", "success");
        const { title, content, author, slug } = response.data;
        setState({ ...state, title, author, slug });
        setContent(content);
      })
      .catch((error) => {
        Swal.fire("Sorry.");
      });
  };
  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>Edit Blog</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <ReactQuill
            value={content}
            onChange={submitContent}
            theme="snow"
            className="pb-5 mb-3"
            style={{ border: "1px solid #666" }}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="Update" className="btn btn-success" />
      </form>
    </div>
  );
};

export default EditComponent;
