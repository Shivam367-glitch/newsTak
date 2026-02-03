import { useDispatch } from 'react-redux';
import { fetchNews } from '../../features/news/newsThunk';
import { setPage } from '../../features/news/newsSlice';
import { memo } from 'react';
import { AiOutlineCaretLeft,AiOutlineCaretRight } from "react-icons/ai";



const PaginationBasic = ({ currentPage, totalPages, selectedLang }) => {

  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchNews({
      language: selectedLang.value,

    }));
  };

 

  return (
    <div className='col-12 mt-4 d-flex  gap-3 justify-content-center align-items-center '>
     <button onClick={() =>handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="border-0 rounded-circle p-2" ><AiOutlineCaretLeft /></button>
              <span className='fs-5'>{currentPage} / {totalPages}</span>
      <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage >= totalPages} className="border-0  rounded-circle p-2" ><AiOutlineCaretRight/> </button>
    </div>
  );
}; 
export default memo(PaginationBasic);
