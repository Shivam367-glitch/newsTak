import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import useFetch from '../Hooks/useFetch';
import { FaWhatsapp } from 'react-icons/fa';


function FetchNews() {
  const [data, loading, error] = useFetch();


    const WhatsAppShare=(url)=>{
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`)
    } 

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="col-12 text-center mt-2 text-danger display-5" style={{minHeight:"100vh"}}>{error}</div>;
  }

  return (
    <div
      className="container-fluid my-3 py-3 justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <h3 className="mx-2">Top Headlines</h3>
      <div className="row gap-3 justify-content-center px-2">
        {data &&
          data.map((item, index) => (
            <div
              className="card col-12 col-md-5 col-lg-3 d-flex flex-column gap-2 pt-2 pb-1"
              style={{ boxShadow: '2px 2px 10px #888888' }}
              key={index}
            >
              <img
                loading="lazy"
                decoding="async"
                src={item.thumbnail}
                className="img-fluid text-center mx-auto news_img rounded" alt={item.title}
              />
              <h5 className="text-danger">{item.title}</h5>
              <div className="d-flex flex-row justify-content-between flex-wrap align-items-center">
                <span>
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>{item.publisher.name}</span>
                <Link to={item.url} target="_blank" className="text-decoration-none">
                  Read More
                </Link>
                <FaWhatsapp color='#128C7E' className='fs-3' onClick={()=>{WhatsAppShare(item.url)}}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default React.memo(FetchNews);
