import { useState, useEffect } from "react";

const STORAGE_KEY = "my_favorite_movies";

export default function useFavorites() {
  // saved favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  //  if favorites change, save them in localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // add a movie to favorites
  function addFavorite(movie) {
    // check if it is already in favorites
    const exists = favorites.find((m) => m.id === movie.id);
    if (!exists) {
      setFavorites([...favorites, movie]);
    }
  }

  // Remove a movie from favorites
  function removeFavorite(id) {
    const newList = favorites.filter((m) => m.id !== id);
    setFavorites(newList);
  }

  //  Toggle (add if not there, remove if already there)
  function toggleFavorite(movie) {
    const exists = favorites.find((m) => m.id === movie.id);
    if (exists) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }
// share globally
  return { favorites, addFavorite, removeFavorite, toggleFavorite };
}
