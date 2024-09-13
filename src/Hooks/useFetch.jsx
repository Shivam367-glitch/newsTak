import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

const useFetch = () => {
  const { selectedLang } = useContext(LanguageContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const category = useParams()["*"]; 

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://news-api14.p.rapidapi.com/v2/trendings',
      params: {
        language: selectedLang.value,
        country: (selectedLang.value=='en'||selectedLang.value=='bn'||selectedLang.value=='hi')?'in':'',
        topic: category ? category : 'General'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
      }
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setData(response?.data?.data || []); 
    } catch (err) {
      setError(err.message || "An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, selectedLang]);

  return { data, loading, error };
};

export default useFetch;
