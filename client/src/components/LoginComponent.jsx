import NavbarComponent from "./NavbarComponent";
import { useState } from "react";
import axios from "axios";
const LoginComponent = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const { username, password } = state;

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/login`, { username, password })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={inputValue("username")}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={inputValue("password")}
          />
        </div>
        <br />
        <input type="submit" value="Login" className="btn btn-success" />
      </form>
    </div>
  );
};

export default LoginComponent;
