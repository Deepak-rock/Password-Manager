import './index.css'

const PasswordList = props => {
  const {passwordItemDetails, deleteButton, isShowPassword} = props
  const {
    website,
    username,
    password,
    initialContainer,
    id,
  } = passwordItemDetails
  const initialClassName = `initail-container ${initialContainer}`
  const initail = website.slice(0, 1)
  const onClickDelete = () => {
    deleteButton(id)
  }
  const passwordisthere = isShowPassword ? console.log('Ok') : console.log('No')
  const starOrPassword = isShowPassword ? (
    <p className="password">{password}</p>
  ) : (
    <img
      className="star"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  return (
    <li className="password-item">
      <div className="item-container">
        <div className="initial-and-content-container">
          <div className={initialClassName}>
            <p className="profile-initial">{initail}</p>
          </div>
          <div>
            <p className="website">{website}</p>
            <p className="username">{username}</p>
            {starOrPassword}
            {passwordisthere}
          </div>
        </div>
        <button className="delete-button" type="button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordList
