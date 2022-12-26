import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register, Navbar, ArticleDetail, CreateArticle } from './components'
import { getItem } from './helpers/persistenceStorage'
import AuthService from './service/auth'
import ArticleService from './service/article'
import { signUserSuccess } from './slice/auth'
import { getArticlesStart, getArticlesSuccess } from './slice/article'

const App = () => {
  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      // console.log(response)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      // console.log(response)
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getItem("token")
    if (token) {
      getUser()
    }

    getArticles()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/article/:slug' element={<ArticleDetail />} />
          <Route path='/create-article' element={<CreateArticle />} />
        </Routes>
      </div>
    </div>
  )
}

export default App