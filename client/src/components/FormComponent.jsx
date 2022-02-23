import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getToken, getUsername } from "../services/authorize";
const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    author: getUsername()
  });
  const { title, author } = state;
  const [content, setContent] = useState("");

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submitContent = (event) => {
    setContent(event);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("API", process.env.REACT_APP_API);
    axios
      .post(
        `${process.env.REACT_APP_API}/create`,
        {
          title,
          content,
          author
        },
        {
          headers: {
            authorization: `Bearer ${getToken()}`
          }
        }
      )
      .then((response) => {
        Swal.fire("Success", "Your blog already added", "success");
        setState({ ...state, title: "", author: "" });
        setContent("");
      })
      .catch((error) => {
        Swal.fire("Sorry.", error.response.data.error, "error");
      });
  };
  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>Write Blog</h1>
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
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
};

export default FormComponent;
