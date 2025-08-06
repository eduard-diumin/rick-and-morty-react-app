import { NavLink } from 'react-router';
import logo from '../../../assets/img/logo.png';
import s from './Header.module.css';

const getLinkClass = ({ isActive }) =>
  isActive ? `${s.activeLink} ${s.headerLink}` : s.headerLink;

export const Header = () => {
  return (
    <nav className={s.container}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="Rick and Morty Logo" />
      </NavLink>
      <NavLink className={getLinkClass} to="/">Home</NavLink>
      <NavLink className={getLinkClass} to="/characters">Characters</NavLink>
      <NavLink className={getLinkClass} to="/locations">Locations</NavLink>
      <NavLink className={getLinkClass} to="/episodes">Episodes</NavLink>
    </nav>
  );
}