import { useContext } from "react";
import { FavoritesContext } from "../store/favorite-context";
import { MeetupList } from "../components/meetups/MeetupList";

export function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;
  if (favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorites. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
}
