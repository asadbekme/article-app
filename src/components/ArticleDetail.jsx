import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ArticleService from "../service/article"
import { getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure } from "../slice/article"

const ArticleDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart())
    try {
      const response = await ArticleService.getArticleDetail(slug) 
      // console.log(response)
      dispatch(getArticleDetailSuccess(response.article))
    } catch (error) {
      dispatch(getArticleDetailFailure())
      // console.log(error)  
    }
  }
  
  useEffect(() => {
    getArticleDetail()
  }, [slug])
    
  return (
    <div>slug: {slug}</div>
  )
}

export default ArticleDetail