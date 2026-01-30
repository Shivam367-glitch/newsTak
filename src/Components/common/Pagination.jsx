import Pagination from 'react-bootstrap/Pagination';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../features/news/newsThunk';
import { setPage } from '../../features/news/newsSlice';
import { memo } from 'react';

const PaginationBasic = ({ currentPage, totalPages, selectedLang }) => {

  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchNews({
      language: selectedLang.value,

    }));
  };

  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination
      size="sm"
      className='mt-5 d-flex justify-content-center'
    >
      {items}
    </Pagination>
  );
};

export default memo(PaginationBasic);
