import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import ArticleService from "../service/article"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article"
import ArticleForm from "./ArticleForm"

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const { slug } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart())
    try {
      const response = await ArticleService.getArticleDetail(slug) 
      // console.log(response)
      setTitle(response.article.title)
      setDescription(response.article.description)
      setBody(response.article.body)
      dispatch(getArticleDetailSuccess(response.article))
    } catch (error) {
      dispatch(getArticleDetailFailure())
      console.log(error)  
    }
  }

  useEffect(() => {
    getArticleDetail()
  }, [])

  const formSubmit = async (e) => {
    e.preventDefault()

    const article = { title, description, body }
    dispatch(postArticleStart())
    try {
      const response = await ArticleService.editArticle(slug, article)
      // console.log(response)
      dispatch(postArticleSuccess())
      navigate('/')
    } catch (error) {
      dispatch(postArticleFailure()) 
      console.log(error)
    }
  }

  const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit } 

  return (
    <div className="text-center my-4">
      <h1 className="fs-2">Edit article</h1>
      <div className="w-75 mx-auto mt-2">
        <ArticleForm {...formProps} />
      </div>
    </div>
  )
}

export default EditArticle