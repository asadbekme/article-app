import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icon } from '../constants'
import { loginUserStart } from '../slice/auth'
import { Input } from '../ui'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.auth)
  // console.log(isLoading)

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img src={icon} alt="icon image" style={{ width: '75px', height: '74px' }} />
          <h1 className="h3 my-3 fw-normal">Login</h1>
          
          <Input type={"email"} label={"Email"} state={email} setState={setEmail} />

          <Input type={"password"} label={"Password"} state={password} setState={setPassword} />

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" disabled={isLoading} onClick={loginHandler}>
            { isLoading ? 'Loading...' : 'Login' }
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login