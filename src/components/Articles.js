import Article from './Article'
import '../css/style.css'
import news from '../newspaper.png'
import live from '../live.png'
function Articles(props){
    return (   
    <>
    <div className={props.articleStyle.theme}>
        <img src={live} style={{width:"10rem",margin:"1rem 1rem"}}/>
	<main className="container py-4">
		<div className="h1 text-center" id="pageHeaderTitle" style={{minHeight:"6rem",marginTop:"0rem"}}>{props.topic && <>Showing Results For {props.topic}</>}</div>
        { 
        props.articles.articles.map((art,i)=>(
            <Article article={art} theme={props.articleStyle}  key={i}/>
        ))       
        }
    </main>
    </div>
        </>
    )
}

export default Articles;