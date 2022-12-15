import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// * COMPONENTE que ira prover os valores para os componentes interessados e também será responsavel
// * por atualizar os valores do contexto
export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  function handleAddFavorite(favoriteMeetup) {
    // * Dessa forma garantimos ao React que estamos atualizando o ultimo snapshot do state
    setUserFavorites((previousState) => {
      return [...previousState, favoriteMeetup];
    });
  }

  function handleRemoveFavorite(meetupId) {
    setUserFavorites((previousState) => {
      return previousState.filter((favorite) => favorite.id !== meetupId);
    });
  }

  function handleItemIsFavorite(meetupId) {
    return userFavorites.some((favorite) => favorite.id === meetupId);
  }

  // * OBJETO QUE SERÁ EXPOSTO PARA OS COMPONENTES VIA CONTEXT
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleItemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
