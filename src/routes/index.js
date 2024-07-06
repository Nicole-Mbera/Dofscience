import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
import Swiper from "../views/carousel";

const Index=()=>{
    return(
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/innovation" element={<Swiper/>}></Route>
       
     
    </Routes>
    )

}
export default Index;