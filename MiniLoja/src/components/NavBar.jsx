import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ ontoggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <NavLink to="/" className={styles}>
          <strong>Shopping</strong>
        </NavLink>
      </div>

      <nav>
        <div>
          <NavLink to="/" className={({isActive }) => isActive ? `${styles.NavLink} ${styles.active}` : styles.navLink}>Catalogo</NavLink>
          <NavLink to="/kanban" className={({isActive }) => isActive ? `${styles.NavLink} ${styles.active}` : styles.navLink}>Kanban</NavLink>
        </div>

        <button type="buton" onClick={ontoggleTheme}></button>

        <div></div>
      </nav>
    </header>
  );
}
