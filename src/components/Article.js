function Article(props){
    //console.log(props)
    return(
        <article className={"postcard "+props.theme.theme+" red"}>
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={props.article.urlToImage} alt="__._Image Loading....." />
			</a>
			<div className={"postcard__text "+props.theme.text}>
				<h1 className="postcard__title blue"><a href={props.article.url} target="_blank">{props.article.title}</a></h1>
				<div className="postcard__subtitle small">
					<time>
						<i className="fas fa-calendar-alt " style={{marginRight:"1rem"}}></i>{props.article.publishedAt.split("T")[0]}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className={"postcard__preview-txt "+props.theme.text}>{props.article.description}</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>{props.article.author}</li>
					<li className="tag__item play blue">
						<a href={props.article.url} target="_blank"><i className="fas fa-play mr-2"></i>Read More...</a>
					</li>
				</ul>
			</div>
		</article>
    )
}

export default Article;