import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logo } from '../constants'

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  // console.log(isLoggedIn)

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center mb-2 border-bottom p-2">
        <Link to={'/'}>
          <img src={logo} alt="logo image" style={{ width: '102px', height: '58px' }} />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {isLoggedIn ? (
            <div className="d-flex align-items-center gap-4">
              <p className="m-0">{user.username}</p>
              <button className="btn btn-outline-danger">Logout</button>
            </div>
          ) : (
            <>
              <Link className="me-3 py-2 text-dark text-decoration-none" to={'/login'}>
                Login
              </Link>
              <Link className="me-3 py-2 text-dark text-decoration-none" to={'/register'}>
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Navbar