
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import useFetch from '../Hooks/useFetch';
import { FaWhatsapp } from 'react-icons/fa';

function FetchNews() {
  const { data, loading, error } = useFetch();
  console.log("Fetched News Data: ", data);

  const WhatsAppShare = (url) => {
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
    
    >
      <h3 className="mx-2">Top Headlines</h3>
      <div className="row gap-3 justify-content-center px-2">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="card col-12 col-md-5 col-lg-3 d-flex flex-column gap-2 pt-2 pb-1 shadow rounded-2 news_card" key={index}>
              <img src={item.thumbnail} alt={item.title} className="img-fluid text-center mx-auto news_img rounded-2" loading="lazy" />
              <h5 className="text-danger mt-2">{item.title}</h5>
              <div className="d-flex flex-row justify-content-between flex-wrap align-items-center">
                <span> {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                <span>{item.publisher.name}</span>
                <Link to={item.url} target="_blank" className='text-decoration-none'>Read More</Link>
                <FaWhatsapp color='#128C7E' className='fs-3 cursor-pointer' onClick={() => WhatsAppShare(item.url)} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-2 text-danger display-5">No News Articles Found</div>
        )}
      </div>
    </div>
  );
}

export default FetchNews;
