import React, { useState } from "react";
import axios from "axios";

import Card from "./Card";
import Carouse from "./Carouse";



const Newz = () => {
  const [Newz, setNewz] = useState([]);
  const [search, setsearch] = useState("");
  const [display, setdisplay] = useState(false)

  const FetchNewz = () => {
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-05-13&sortBy=popularity&apiKey=30f7f9f697d84ad19bd2cf976deab630`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.articles);

        setNewz(res.data.articles);
      })
      .catch("error came");
  };
//   let flag= false;

  const handleChange = (e) => {
    setsearch(e.target.value);
    setdisplay(true);
    
  };
  return (
    <>
      <div className="heading">
        <h1>Newzz Buzz </h1>
      </div>


      <div className="SearchBox">
      <form className="search-container"  >
    <input type="text" id="search-bar" placeholder="Search any Country" onChange={handleChange} />

    <a href="#"  onClick ={FetchNewz}>
        <img className="search-icon" src="image/search-icon.png" alt = "search-icon" /></a>
  </form>
  </div>

        
      { !display ? (<p><Carouse/> </p> ):(
           <div className="container">
           {Newz.map((val, index) => { 
               
             return (
                     <Card
                 img={val.urlToImage}
                 title={val.title}
                 content={val.content}
                 desc={val.description}
                 link={val.url}
                 id={index}
               />
                 
               
             );
           })}
          </div>
      ) }

  {/* <div className="container">
      {Newz.map((val, index) => { 
        return (
                <Card
            img={val.urlToImage}
            title={val.title}
            content={val.content}
            desc={val.description}
            link={val.url}
            id={index}
          />
            
          
        );
      })}
     </div> */}

     
    </>
  );
};

export default Newz;
