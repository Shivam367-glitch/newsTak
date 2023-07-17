import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner';
function FetchNews({cate}) {
    
    const [Data, setData] = useState("");
    console.log(cate);
    const fetchData = async () => {
        await axios.get(
            cate
                ?`https://newsapi.org/v2/top-headlines?country=in&category=${cate}&apiKey=4b5f80d1d75842b8883e6b22d57e3ee6` 
                :'https://newsapi.org/v2/top-headlines?country=in&apiKey=4b5f80d1d75842b8883e6b22d57e3ee6'
        ).then((res) => setData(res.data.articles));
     
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
                    <div key={index}>
                        <div  className='container my-3 p-3' style={{ width: "600px", boxShadow: "2px 2px 10px #888888" }} >
                            {/*style={{width:"600px"}}  */}
                            <h5 className='my-2'>{items.title}</h5>
                            <div className=' d-flex flex-column justify-content-center align-items-center'>
                                <img className='img-fluid' style={{ width: "100%", height: "300px", objectFit: "cover" }} src={items.urlToImage} alt="image not found" />
                            </div>

                            <p className='my-1'>{items.content}<a href={items.url} target="_blank" className='mx-1'>Read More</a></p>
                        </div>
                    </div>) : <Spinner/>}</div>
        </div>
    )
}
export default React.memo(FetchNews)
