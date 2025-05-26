import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function Approutes(){
    return(
        <Routes>
            <Route path="/Home" element={<Home/>} > </Route>
            <Route path="/login" element={<Login/>} > </Route>
               <Route path="/signup" element={<Signup/>}> </Route>
               <Route path="*" element={<Notfound/>}> </Route>

        </Routes>
    )
}