import React from 'react';
import soSanhMayDoDuongHuyet from '../../../../assets/images/handbooks/111815-so-sanh-may-do-duong-huyet-accu-chek-guide-instant.jpg';
import MayDoDuongHuyetAccu from '../../../../assets/images/handbooks/134647-may-do-duong-huyet-accu-chek-guide.jpg';
import mayThuDuongHuyetAccu from '../../../../assets/images/handbooks/151919-may-thu-duong-huyet-accu-chek-instant-6.jpg';
import PopularSection from '../PopularSection';

const HandBook_LIST = [
  {
    image: soSanhMayDoDuongHuyet,
    title: 'So sánh máy đo đường huyết Accu-chek Guide vs Accu-chek Instant',
    link: '',
  },
  {
    image: MayDoDuongHuyetAccu,
    title: 'Máy đo đường huyết Accu-Chek Guide có tốt không? Có điểm gì nổi bật?',
    link: '',
  },
  {
    image: mayThuDuongHuyetAccu,
    title: 'Máy thử đường huyết Accu-Chek Instant chính hãng giá tốt',
    link: '',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const customPopularItemStyles = {
  image: {
    width: '50%',
    height: '150px',
    padding: '1px 0',
    boxShadow: '0px 0px 1px rgba(0,0,0,0.5)',
  },
  title: {
    marginLeft: '10px',
    fontSize: '16px',
    fontWeight: '700',
    color: '#333'
  },
  containerA: {
    display: 'flex',
  },
};

const HandBook = () => {
  return (
    <PopularSection
      data={HandBook_LIST}
      backgroundColor="#fff"
      title="Cẩm nang"
      customPopularItemStyles={customPopularItemStyles}
      button={{ name: 'tất cả bài viết', to: '#cam-nang' }}
      responsive={responsive}
    />
  );
};

export default HandBook;
