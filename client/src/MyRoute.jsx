import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FormComponent from "./components/FormComponent";

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/create" exact element={<FormComponent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoute;
