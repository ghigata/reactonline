import './header.css';
import Input from '../Global/Input';
import Button from '../Global/Button';
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const searchStr = data.get('search');
    navigate(`/search?q=${searchStr}`);
  }

  return (
      <header id="header">
        <div className="tcl-container">
          <div className="tcl-row tcl-no-gutters header">
            <div className="tcl-col-2">
              {/* Logo */}
              <div className="header-logo">
                <a href="/">
                  <img src={logo} alt="Go to homepage" />
                </a>
              </div>
            </div>
            <div className="tcl-col-4">
              {/* Header Search */}
              <form onSubmit={handleSubmit}>
                <Input type="search" label="Username" name="search" placeholder="Search articles here ..."/>
              </form>
            </div>
            <div className="tcl-col-6">
              {/* Nav */}
              <div className="header-nav">
                <ul className="header-nav__lists">
                  <li><a href="#">Home</a></li>
                  <li>
                    <a href="#">Our Team</a>
                    <ul>
                      <li><a href="#">Our Team 1</a></li>
                      <li><a href="#">Our Team 2</a></li>
                      <li><a href="#">Our Team 3</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                    <ul>
                      <li><a href="#">Contact 1</a></li>
                      <li><a href="#">Contact 2</a></li>
                      <li>
                        <a href="#">Contact 3</a>
                        <ul>
                          <li><a href="#">Contact 11</a></li>
                          <li><a href="#">Contact 12</a></li>
                          <li><a href="#">Contact 13</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="header-nav__lists">
                  <li className="user"><a href="login.html"><i className="icons ion-person" /> Tài khoản</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
