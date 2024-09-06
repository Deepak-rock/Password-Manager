import PasswordInput from '../PasswordInput/index'
import './index.css'

const PasswordManager = () => (
  <div className="password-app-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      className="logo"
      alt="app logo"
    />
    <PasswordInput />
  </div>
)
export default PasswordManager
