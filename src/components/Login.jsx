import { useState, useContext } from "react"
import { Context } from '../Contexts/Contexts'
import { useNavigate } from "react-router-dom";

function Login() {
  const { formError, setFormError, Users, loggedIn, setLoggedIn } = useContext(Context)

  const [loginDetail, setloginDetail] = useState({
    username: "",
    password: ""
  });


  function handleLogin({ target }) {
    setloginDetail({ ...loginDetail, [target.name]: target.value })
  }
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    const user = Users.find(user => {
      return loginDetail.username === user.username && loginDetail.password === user.password
    });

    if (user) {
      setFormError(false);
      setLoggedIn(true)
      navigate("/");
    } else {
      setFormError(true)
      setLoggedIn(false)
      setloginDetail({
        username: "",
        password: ""
      })
    }
  }

  function handleLogout(e) {
    e.preventDefault()
    setLoggedIn(false)
    navigate("/");

  }




  return (

    <div className="loginWrapper">
      {!loggedIn ? <form>
        <label>Username</label>
        <input name="username" value={loginDetail.username} onChange={handleLogin} />
        <label>Password:</label>
        <input name="password" value={loginDetail.password} onChange={handleLogin} />
        {formError && <p>Incorrect username or password</p>}
        <button onClick={handleSubmit} >Sign in</button>

      </form> : <button onClick={handleLogout} >Sign out</button>}
    </div>
  )
}

export default Login
