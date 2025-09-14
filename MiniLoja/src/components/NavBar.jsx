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
              to="/cssGlobal"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              CSS Global
            </NavLink>
            <NavLink
              to="/styled-components"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              styled-components
            </NavLink>
            <NavLink
              to="/windpage"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Tailwind CSS
            </NavLink>
            
          </div>
          <button type="button">
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