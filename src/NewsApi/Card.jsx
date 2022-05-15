import React,{useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import "./Cards.scss"




const Cards = (props) => {

    const [fun, setfun] = useState(false);

const choice =()=>{
 setfun(true);
}
const choice2 = () =>{
  setfun(false);
}
  return (

    <>
  
<div className="card">
    <div className="sec">
    <div className="img-sec">
        <img src= {props.img} alt=""  />
    </div>
    <div className="sec2">
    <div className="title">
        {props.title}
    </div>
    <div className="btn" onClick={choice} onDoubleClick = {choice2} >
    more
    </div>
    </div>
     {  !fun ?(<p></p> ) : ( <div className="content"> { props.content} <a href= {props.link}>More</a>  </div>   )}
    
   

    </div>
    
</div>
   

    </>
  )
}

export default Cards