import '../css/search.css'
import React,{useState,useEffect} from "react"
function Header(props){
    let [article,setArt] = useState('');
    return(
    <div>  
    
    <div className="search-box" style={{background:props.headerStyle.clr,color:props.headerStyle.txt}}>
  <input type="text" placeholder="Search anything" className="search-input" style={{background:props.headerStyle.clr,color:props.headerStyle.txt}} onChange={(e)=>{setArt(e.target.value)}}/>
    <a href="#" className="search-btn" style={{background:props.headerStyle.clr}} onClick={(e)=>{e.preventDefault(); props.getArticles(article)}}>
      <i className="fas fa-search"></i>
    </a>
        <br/>
</div>
</div>
    )
}

export default Header;

