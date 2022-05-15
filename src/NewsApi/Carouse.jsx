import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

import "./Cards.scss"
// G:\react_tut\newz_api\public\image\trending.png
const images = [
    { url: "image/Learn.png" },
    { url: "image/trending.png" },
    { url: "image/upTo.png" },
   
  ];
  const myStyle = {
    position:"relative",  
    marginLeft:"auto", 
    marginRight: "auto",
    objectFit : "fill",
    marginTop : "5rem",
    content : "", 
    zIndex : "-1rem",
    marginBottom: "3rem",
    // left : "18rem",
    '@media (max-width: 500px)': {
        left : "none",
        right : "none",
        width: "20rem",
        height : "20rem"
      },
  }

const Carouse = () => {
  return (
    <>
  


   <SimpleImageSlider
   className = "carousel"
        width={"30rem"}
        transition ={"0.5s"}
        interval={5000}
        height={"25rem"}
        images={images}
        showBullets={true}
        showNavs={true}
        style = {myStyle}
      />
    </>
  )
}

export default Carouse