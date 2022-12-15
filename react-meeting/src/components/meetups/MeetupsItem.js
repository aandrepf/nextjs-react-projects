import { useContext } from "react";

import { FavoritesContext } from "../../store/favorite-context";
import { Card } from "../ui/Card";
import styles from "./MeetupItem.module.css";

//* useContext = permite conectar o context e o componente

export function MeetupItem({ id, image, title, address, description }) {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.itemIsFavorite(id);

  function handleToggleFavoriteStatus() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(id);
    } else {
      favoritesContext.addFavorite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleToggleFavoriteStatus}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
