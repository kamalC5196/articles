import React,{useState, useEffect} from "react";

import {API_KEY} from './config'

import './css/style.css'

import Header from './components/Header'
import Article from './components/Articles'
import Error from './components/Error'

function App() {

let headerStyle={
    clr:"#fff",
    txt:"#000"
}

let articleStyle={
    theme:"dark",
    text:""
}
let [articles,fetchArticles] = useState({});
let [topic,setTopic] = useState('');
let [error,setError] = useState('');
    
const getArticles = async (topic) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const json = await response.json();
    fetchArticles(json);
    setTopic(topic);
      setError('');
    console.log(json);
  } catch (error) {
    console.log(error);
    setError("failed");
  }
}

useEffect(()=>{
    getArticles()
},[])
  return (
      <>
      <Header headerStyle={headerStyle} getArticles={getArticles}/>
      {articles.status && !error && <Article articles={articles} articleStyle={articleStyle} topic={topic} />}
      {error && <Error />}
      </>
  )
}

export default App;
