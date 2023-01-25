import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ArticleService from "../service/article"
import { getArticlesStart, getArticlesSuccess } from "../slice/article"
import { Loader } from "../ui"
import ArticleCard from "./ArticleCard"

const Main = () => {
  const { isLoading, articles } = useSelector((state) => state.article)
  const dispatch = useDispatch()
  
  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      console.log(response)
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])
  
  return (
    <>
      { isLoading && <Loader /> }
      <div className="album py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} getArticles={getArticles} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Main