import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber', // #f59e0b
  'blue', // #0b69ff
  'orange', // #f97316
  'emerald', // #10b981
  'green', // #14b8a6
  'teal', // #0ea5e9
  'red', // #b91c1c
  'grey', // #64748b
  'purple', // #7683cb
]

class PasswordInput extends Component {
  state = {
    webSiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordList: [],
    isShowPassword: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({webSiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  getPasswordList = event => {
    event.preventDefault()
    const initialContainerBackgroundClassName = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const {webSiteInput, usernameInput, passwordInput} = this.state

    const newPasswordList = {
      id: uuidv4(),
      website: webSiteInput,
      username: usernameInput,
      password: passwordInput,
      initialContainer:
        initialContainerBackgroundClassNames[
          initialContainerBackgroundClassName
        ],
    }
    this.setState(pervState => ({
      passwordList: [...pervState.passwordList, newPasswordList],
      webSiteInput: '',
      usernameInput: '',
      passwordInput: '',
      searchInput: '',
    }))
  }

  deleteButton = id => {
    const {passwordList} = this.state
    this.setState({
      passwordList: passwordList.filter(
        deletePassword => deletePassword.id !== id,
      ),
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  toggleShowPassword = () => {
    const {isShowPassword} = this.state
    this.setState({isShowPassword: !isShowPassword})
  }

  renderPasswordlist = () => {
    const {passwordList, initialContainer, searchInput, isShowPassword} =
      this.state
    const filteredSearchResult = passwordList.filter(searchItem =>
      searchItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (filteredSearchResult.length > 0) {
      return (
        <ul className="password-list-container">
          {filteredSearchResult.map(passwordItem => (
            <PasswordList
              key={passwordItem.id}
              passwordItemDetails={passwordItem}
              initialContainer={initialContainer}
              deleteButton={this.deleteButton}
              isShowPassword={isShowPassword}
            />
          ))}
        </ul>
      )
    }
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
          className="no-password-img"
          alt="no passwords"
        />
        <p className="no-password">No Passwords</p>
      </>
    )
  }

  render() {
    const {
      searchInput,
      webSiteInput,
      usernameInput,
      passwordInput,
      passwordList,
    } = this.state
    return (
      <>
        <div className="input-page-container">
          <img
            className="input-page-img-sm"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <img
            className="input-page-img-lg"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
          <form className="input-container" onSubmit={this.getPasswordList}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="input-icon"
                alt="website"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                required
                value={webSiteInput}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="input-icon"
                alt="username"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                required
                value={usernameInput}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="input-icon"
                alt="password"
              />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                required
                value={passwordInput}
                onChange={this.onChangePassword}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="password-list">
          <div className="header">
            <div className="title-count">
              <h3 className="title">Your Passwords</h3>
              <p className="count">{passwordList.length}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                value={searchInput}
                className="search-input"
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-input-container">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox-input"
              onClick={this.toggleShowPassword}
            />
            <label className="show-password" htmlFor="checkbox">
              Show passwords
            </label>
          </div>
          {this.renderPasswordlist()}
        </div>
      </>
    )
  }
}
export default PasswordInput
