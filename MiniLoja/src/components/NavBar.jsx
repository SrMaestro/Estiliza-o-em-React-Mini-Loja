import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <NavLink to="/" className={styles.logo}>
          <strong>Shopping</strong>
        </NavLink>

        <nav className={styles.actions}>
          <div className={styles.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.NavLink} ${styles.active}` : styles.navLink
              }
            >
              Catalogo
            </NavLink>
            <NavLink
              to="/kanban"
              className={({ isActive }) =>
                isActive ? `${styles.NavLink} ${styles.active}` : styles.navLink
              }
            >
              Kanban
            </NavLink>
          </div>

          <button type="buton">
            <span className={styles.themeText}></span>
          </button>

          <div className={styles.cart}>
            <span className={styles.cartCount}></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
