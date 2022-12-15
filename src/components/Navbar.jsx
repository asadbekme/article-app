import { Link } from "react-router-dom"
import { logo } from '../constants'

const Navbar = () => {
  return (
    <div className="container">
      <div className="d-flex flex-md-row align-items-center mb-2 border-bottom p-2">
        <Link to={'/'}>
          <img src={logo} alt="logo image" style={{ width: '112px', height: '58px' }} />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link className="me-3 py-2 text-dark text-decoration-none" to={'/login'}>
            Login
          </Link>
          <Link className="me-3 py-2 text-dark text-decoration-none" to={'/register'}>
            Register
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar