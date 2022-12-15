import { Link } from "react-router-dom";
import { useContext } from "react";

import { FavoritesContext } from "../../store/favorite-context";

import styles from "./MainNavigation.module.css";

export function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites{" "}
              <span className={styles.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
