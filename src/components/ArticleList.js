import Article from "./Article"
import blogData from "../data/blog"

let articleElements = blogData.posts.map((post,index) => {
    return(
        <Article key={index} {...post}/>
    )
})

function ArticleList() {
    return (
        <main>
        {articleElements}
        </main>
    )
}

export default ArticleList