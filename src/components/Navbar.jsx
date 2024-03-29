import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { removeItem } from "../helpers/persistenceStorage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center mb-2 border-bottom p-2">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo image"
            style={{ width: "135px", height: "56px" }}
          />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {isLoggedIn ? (
            <div className="d-flex align-items-center gap-3">
              <p className="m-0 fw-normal fs-5">{user.username}</p>
              <Link
                className="text-dark text-decoration-none"
                to={"/create-article"}
              >
                <button className="btn btn-outline-primary">Create</button>
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                className="me-3 py-2 text-dark text-decoration-none"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className="me-3 py-2 text-dark text-decoration-none"
                to={"/register"}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
