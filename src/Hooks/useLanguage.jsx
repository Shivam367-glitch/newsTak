import {useEffect,useState} from 'react'
import axios from "axios"
const useLanguage = () => { 
      const [options, setOptions] = useState([]);
      const fetchDropdownData = async () => { 
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/v2/info/languages',
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_API_KEY,
              'x-rapidapi-host': 'news-api14.p.rapidapi.com'
            }
          };
      try {
        const response = await axios.request(options);
        setOptions(response.data.data);
      } catch (error) {
        console.error('Error fetching dropdown data', error);
      }
    };

  useEffect(() => { 
    fetchDropdownData();
  }, []); 
  return [options]
}

export default useLanguage