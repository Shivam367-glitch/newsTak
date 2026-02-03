import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { FaWhatsapp } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../features/news/newsThunk";
import LangaugeContext from "../../contexts/LanguageContext.jsx";
import { WhatsAppShare } from "../../utility/utility.js";
import PaginationBasic from "../common/Pagination.jsx";
function FetchNews() {
  
  const dispatch = useDispatch();
  const { selectedLang } = useContext(LangaugeContext);
  const {currentCategory,newsByCategory, status, error } = useSelector((state) => state.news); 
 const categoryData = newsByCategory[currentCategory] || {};
 const { currentPage = 0, totalPages = 0 } = categoryData;

  useEffect(() => {
  const categoryData = newsByCategory[currentCategory];

  if (!categoryData || categoryData.articles?.length === 0) {
    dispatch(
      fetchNews({
        category: currentCategory,
        language: selectedLang.value,
      })
    );
  }
}, [currentCategory,dispatch,currentPage]);



  if (error) {
    return (
      <div
        className="col-12 text-center mt-2 text-danger display-5"
        style={{ minHeight: "100vh" }}
      >
        {error}
      </div>
    );
  }

  return (
    <div className="container-fluid my-3 py-3">
      <h3 className="mx-2">Top Headlines</h3>
        {
          status==="loading"? <Spinner /> :    
      <div className="row gap-3 justify-content-center px-2">
        {categoryData?.currentArticleToView?.length > 0 ? (
          <>
            {categoryData?.currentArticleToView.map((item,index) => (
            
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
            ))}
          </>
        ) : (
          <div className="col-12 text-center mt-2 text-danger display-5">
            No News Articles Found
          </div>
        )}
      </div> 
      }
      <div className="row ">
        <PaginationBasic currentPage={currentPage} totalPages={totalPages}  selectedLang={selectedLang} />
      </div>
    </div>
  );
}

export default FetchNews;
