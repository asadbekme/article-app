import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icon } from '../constants'
import AuthService from '../service/auth'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import { Input } from '../ui'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.auth)
  // console.log(auth)

  const registerHandler = async (e) => {
    e.preventDefault()
    
    dispatch(signUserStart())
    const user = {username: username, email: email, password: password}
    try {
      const response = await AuthService.userRegister(user)
      // console.log(response)
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error.response.data)
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img src={icon} alt="icon image" style={{ width: '75px', height: '74px' }} />
          <h1 className="h3 my-3 fw-normal">Register</h1>

          <Input label={"Username"} state={username} setState={setUsername} />
          
          <Input type={"email"} label={"Email"} state={email} setState={setEmail} />

          <Input type={"password"} label={"Password"} state={password} setState={setPassword} />

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit" disabled={isLoading} onClick={registerHandler}>
            {isLoading ? 'Loading...' : 'Register'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default Register