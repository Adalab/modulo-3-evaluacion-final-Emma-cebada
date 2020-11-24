import title from '../images/title.png';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title" >
        <img
          className="header__title__image"
          src={title}
          alt="Rick and Morty App"
          title="Rick and Morty App"
        />
      </h1>
    </header>
  )
}

export default Header;