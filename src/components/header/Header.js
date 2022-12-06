import './header.scss';
import logo from '../../resources/logo/Logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
