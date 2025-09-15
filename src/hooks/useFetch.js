import axios from "axios";
import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        console.log("API response:", res.data);
        setData(res.data);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, loading, error };
};
