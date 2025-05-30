import { useState } from 'react';
import { Container } from './styles';
import { NavHashLink, HashLink } from 'react-router-hash-link';
// import CV from '../../assets/SamirAghavSDE1ExperiencedResume.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>Samir</span>
        <span>Aghav</span>
      </HashLink>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#experience" onClick={closeMenu}>
          Experience
        </NavHashLink>
        <NavHashLink smooth to="#education" onClick={closeMenu}>
          Education
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="#accomplishment" onClick={closeMenu}>
          Accomplishments
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href="https://drive.google.com/file/d/1x9mX61l576BnIshnPMqNqYyJNZ4mM_Nx/view?usp=sharing" target='_blank' rel='noreferrer' className="button">
          CV
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
}
