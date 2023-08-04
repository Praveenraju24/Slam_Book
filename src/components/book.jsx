import React from "react";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Home from "./home";
import App from "./app";
import Error from "./error";
import Signup from "./signup";
import Forgot from "./forgot";

export default function Book(){
    return <div>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<App />}></Route>
                <Route path="/error" element={<Error/>}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/forgot" element={<Forgot/>}></Route>
            </Routes>
          </BrowserRouter>
    </div>
}