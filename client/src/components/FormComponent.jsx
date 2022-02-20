import { useState } from "react";

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
    return (
        <div className="container p-5">
            <h1>Write Blog</h1>
            <form action="">
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
