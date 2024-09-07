import {useState,useEffect} from "react"
import axios from "axios"
const useFetch = (cate) => { 
    const [data, setData] = useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/v2/trendings',
            params: {
              language: 'en',
              country:'in',
              topic: cate?cate:'General'
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
            }
          }; 
          try { 
            setLoading(true);
            await axios.request(options).then((res) =>{
                setData(res?.data?.data)
            }); 
          } catch (error) {
            setError(error.message);
          }
          finally{
            setLoading(false)
          }
       
    }
    useEffect(() => {
        document.title=cate?cate.toUpperCase():"News Tak";
        fetchData()
    }, [cate])
  return [data,loading,error]
}

export default useFetch