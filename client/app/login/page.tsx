import "@styles/Form.css"
// components
import LoginForm from "@components/LoginForm"

// service
import { loginProcessor } from "@services/auth.service"

function Sign() {
  return (
    <>
      <LoginForm formAction={loginProcessor} />
    </>
  )
}

export default Sign