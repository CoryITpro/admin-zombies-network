import InputField from "components/inputfield"
import Button from "components/button"
import "./style.scss"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import credentials, {
  getLoggedIn,
  setLoggedIn,
} from "../../helpers/credentials"

const Auth = () => {
  const [isLogin, setAsLogin] = useState(true)
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onForgetHandler = () => {
    setAsLogin(!isLogin)
  }

  const doLogin = () => {
    if (
      credentials["userEmail"] == email &&
      credentials["userPwd"] == password
    ) {
      setLoggedIn()
      history.push("/dashboard")
    } else {
      alert("Not correct user information")
    }
  }

  useEffect(() => {
    if (getLoggedIn()) {
      setLoggedIn()
      history.push("dashboard")
    }
  })

  return (
    <div className="login flex">
      <div className="login-title flex flex-column">
        <span>{isLogin ? "WELCOME TO ADMIN" : "RESET PASSWORD"}</span>
        {/* <p>or</p>
        <div className="login-forget" onClick={onForgetHandler}>
          {isLogin ? "Forget Password?" : "Back to Login"}
        </div> */}
      </div>
      <div className="login-decoration flex"></div>
      <div className="login-wrap flex flex-column">
        <InputField
          name="Email"
          changeHandler={(e) => {
            setEmail(e.target.value)
          }}
        />
        <InputField
          name="Password"
          changeHandler={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button onClick={doLogin}>Login</Button>
      </div>
    </div>
  )
}

export default Auth
