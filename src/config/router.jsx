import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    RouterProvider,
    Route,
    Routes
} from "react-router-dom";
import PopUp from "../components/PopUp";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/popUp" element={<PopUp/>} />

            </Routes>
        </BrowserRouter>


    )
}
export default Router