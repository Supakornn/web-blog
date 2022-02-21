import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
    const [blogs, setBlogs] = useState([]);
    const fetchData = () => {
        axios
            .get(`${process.env.REACT_APP_API}/blogs`)
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container p-5">
            <NavbarComponent />
            {blogs.map((blog, index) => (
                <div
                    className="row"
                    key={index}
                    style={{ borderBottom: "1px solid silver" }}
                >
                    <div className="col pt-3 pb-2">
                        <h2>{blog.title}</h2>
                        <p>{blog.content.substring(0, 250)}</p>
                        <p className="text-muted">
                            {blog.author},{" "}
                            {new Date(blog.createdAt).toLocaleString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
