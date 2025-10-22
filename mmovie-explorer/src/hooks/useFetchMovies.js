import { useEffect, useState } from "react";
import { getAllMovies } from "../utils/api";

export default function useFetchMovies() {
  // 🧩 make small boxes to store info
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load movies.");
        setLoading(false);
      });
  }, []);
  return { movies, loading, error };
}
