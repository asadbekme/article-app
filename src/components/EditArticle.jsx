import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ArticleService from "../service/article"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article"
import ArticleForm from "./ArticleForm"

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const { slug } = useParams()
  const dispatch = useDispatch()

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

  const formSubmit = () => {

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