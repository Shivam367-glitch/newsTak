import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LangaugeContext from "../contexts/LanguageContext.jsx";

// collect all keys from .env
const apiKeys = [
  import.meta.env.VITE_RAPIDAPI_KEY_1,
  import.meta.env.VITE_RAPIDAPI_KEY_2,
  import.meta.env.VITE_RAPIDAPI_KEY_3,
];

let currentKeyIndex = 0;

const getApiKey = () => apiKeys[currentKeyIndex];
const rotateKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
  console.warn(`🔑 Switched to API key index: ${currentKeyIndex}`);
};

const useFetch = () => {
  const { selectedLang } = useContext(LangaugeContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const category = useParams()["*"];

  const fetchData = async () => {
    setLoading(true);
    setError("");

    let attempt = 0;

    while (attempt < apiKeys.length) {
      const options = {
        method: "GET",
        url: `${import.meta.env.VITE_BASE_URL}/v2/trendings`,
        params: {
          language: selectedLang.value,
          country:
            selectedLang.value === "en" ||
            selectedLang.value === "bn" ||
            selectedLang.value === "hi"
              ? "in"
              : "",
          topic: category ? category : "General",
        },
        headers: {
          "X-RapidAPI-Key": getApiKey(),
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setData(response?.data?.data || []);
        attempt = apiKeys.length;  
        break;
      } catch (err) {
        if (err.response?.status === 429) {
          console.error("⚠️ Rate limit exceeded. Switching key...");
          rotateKey();
          attempt++;
        } else {
          setError(err.message || "An error occurred while fetching data");
          break;
        }
      }
      if (attempt === apiKeys.length) {
        setError("All API keys exhausted due to rate limits.");
      }
    }


    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category, selectedLang]);

  return { data, loading, error };
};

export default useFetch;
