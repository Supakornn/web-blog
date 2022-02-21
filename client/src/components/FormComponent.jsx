import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from "sweetalert2";
const FormComponent = () => {
    const [state, setState] = useState({
        title: "",
        content: "",
        author: ""
    });
    const { title, content, author } = state;
    const inputValue = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log("API", process.env.REACT_APP_API);
        axios
            .post(`${process.env.REACT_APP_API}/create`, {
                title,
                content,
                author
            })
            .then((response) => {
                Swal.fire("Success", "Your blog already added", "success");
                setState({ ...state, title: "", content: "", author: "" });
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
                    <textarea
                        type="text"
                        className="form-control"
                        value={content}
                        onChange={inputValue("content")}
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
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                />
            </form>
        </div>
    );
};

export default FormComponent;
