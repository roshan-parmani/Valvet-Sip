// import Fetch from "./Components/Fetch"
import './index.css'
import { useState } from "react";
import Mocktail from "./Components/Mocktail"
import Search from "./Components/search";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
export default function App(){
    const [searchdrink , setsearchdrink] =useState("Martini");
  return(
    <>  
          <Navbar/>
        <Search setsearchdrink={setsearchdrink} searchdrink={searchdrink}/>
        <Mocktail setsearchdrink={setsearchdrink} searchdrink={searchdrink}/>
      <Footer/>
    </>
  )
}