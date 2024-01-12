import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner';
function FetchNews({cate}) {
    
    const [Data, setData] = useState("");
    console.log(cate);
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/top-headlines',
            params: {
              country: 'in',
              language: 'en',
             
              category: cate?cate:''
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
            }
          };
        await axios.request(options).then((res) => setData(res.data.articles));
     
    }
    useEffect(() => {
        document.title=cate?cate.toUpperCase():"News Tak";
        fetchData()
    }, [cate])
    return (
        <div className='container my-4'>
            <h3 >Top HeadLines</h3>
            <div className='container d-flex flex-column justify-content-center align-items-center my-3' style={{minHeight:"100vh"}}>
                {Data ? Data.map((items, index) =>
                        <div  className='container my-3 p-3' style={{  boxShadow: "2px 2px 10px #888888" }} key={index}>
                            <h5 className='my-2'>{items.title}</h5>
                            <div className='d-flex flex-row justify-content-between flex-wrap mt-3'>
                             <p>{new Date(items.published_date).toLocaleDateString()}</p>
                             <p>{items.publisher.name}</p>
                            <p className='my-1'>{items.content}<a href={items.url} target="_blank" className='mx-1'>Read More</a></p>
                            </div>
                        </div>
           ) : <Spinner/>}
            </div>
        </div>
    )
}
export default React.memo(FetchNews)
