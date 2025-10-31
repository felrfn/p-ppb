import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favoriteRecipes");
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Gagal memuat favorit dari localStorage", error);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
    } catch (error) {
      console.error("Gagal menyimpan favorit ke localStorage", error);
    }
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    if (!recipe.uniqueId) {
      console.error("Resep tidak memiliki uniqueId!", recipe);
      return;
    }
    setFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites };
      if (newFavorites[recipe.uniqueId]) {
        delete newFavorites[recipe.uniqueId];
      } else {
        newFavorites[recipe.uniqueId] = recipe;
      }
      return newFavorites;
    });
  };

  const isFavorite = (uniqueId) => {
    return !!favorites[uniqueId];
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
