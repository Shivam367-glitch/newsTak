import {useEffect,useState} from 'react'
import axios from "axios"



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


const useLanguage = () => { 
      const [options, setOptions] = useState([]);
      const fetchDropdownData = async () => {
        let attempt = 0; 

        while(attempt<apiKeys.length){

        
        const options = {
            method: 'GET',
            url: `${import.meta.env.VITE_BASE_URL}/v2/info/languages`,
            headers: {
              'x-rapidapi-key': getApiKey(),
              'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
            }
          };
      try {
        const response = await axios.request(options);
        setOptions(response.data.data);
          attempt = apiKeys.length;
           break;
      } catch (error) {
        if (error.response?.status === 429) {
          console.error("⚠️ Rate limit exceeded. Switching key...");
          rotateKey();
          attempt++;
        } else { 
          console.error("Error fetching languages:", error);
          break; 
        }
      }
      if (attempt === apiKeys.length) {
      console.warn("All API keys exhausted due to rate limits.");
      }
    }
    };

  useEffect(() => { 
    fetchDropdownData();
  }, []); 
  return [options]
}

export default useLanguage