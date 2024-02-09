import "@styles/Form.css"

// components
import RegisterForm from "@components/RegisterForm"

// service
import { registerProcessor } from "@services/auth.service"

function Sign() {
  return (
    <>
      <RegisterForm formAction={registerProcessor}/>
    </>
  )
}

export default Sign