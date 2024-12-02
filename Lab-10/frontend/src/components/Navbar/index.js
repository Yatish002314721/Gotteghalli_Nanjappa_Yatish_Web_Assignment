import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Logout} from "../Logout";
import {logoutUser} from "../../store/actions/userActions";

function Navbar() {
 // const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const [isAdmin, setIsAdmin] = useState(false)
    // const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    const { userType, isAuthenticated, userName } = useSelector((state) => state.user);
    console.log("=====", userType, isAuthenticated, userName)

  useEffect(
    () => {
        // chech if token is stored
        // const token = localStorage.getItem('token')
        // setIsAuthenticated(!!token)

        // const userType = localStorage.getItem("userType");
        // setIsAdmin(userType === 'admin');

        // const username = localStorage.getItem("username");
        // setUsername(username);
        dispatch({ type: "GET_USER", payload: {} })
    },
    [dispatch]
  )
  // active link style
  const activeStyle = { backgroundColor: 'white', color:"#333", fontWeight: 'bold',borderRadius:'4px' }
  const defaultStyle = { color: '#fff', fontWeight: 'bold' }

    return (
    <AppBar position="static" style={{width: "100%"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userName && userName !== "" ? ( `User : ${userName}`): ("Job Portal")}
          </Typography>
            {isAuthenticated ? (
                <>
                    {userType === 'admin' ? (
                        <>
                            <NavLink to="/admin/employees" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Employees</Button>
                            </NavLink>
                            <NavLink to="/admin/addjob" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Add Job</Button>
                            </NavLink>
                        </>
                    ) :(
                        <>
                            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink to="/jobs" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Jobs</Button>
                            </NavLink>
                            <NavLink to="/companies" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Companies</Button>
                            </NavLink>
                            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">About</Button>
                            </NavLink>
                            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Contact</Button>
                            </NavLink>
                        </>
                    )}

                    <Button color="inherit" onClick={() => { Logout(); dispatch(logoutUser()); }}>
                      Logout
                    </Button>
                </>
          ) : (
              <>
                <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                  <Button color="inherit">Login</Button>
                </NavLink>

                <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                  <Button color="inherit">Register</Button>
                </NavLink>
              </>
          )}

        </Toolbar>
      </AppBar>
    )
}

export default Navbar