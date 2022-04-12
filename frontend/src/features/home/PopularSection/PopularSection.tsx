import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import styles from './PopularSection.module.scss';

interface PopularProps {
  data: {
    image: string;
    title: string;
    link: string
  }[];
  backgroundColor: string;
  title: string;
  customPopularItemStyles?: {
    image: {};
    title: {};
    container: {};
  };
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const PopularSection = ({data , backgroundColor, title, customPopularItemStyles}: PopularProps) => {
  return (
    <div className={styles.popular} style={{backgroundColor: backgroundColor}}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button>Xem Thêm</button>
      </div>
      <Carousel responsive={responsive} sliderClass={styles.slider} arrows={true} autoPlay={false}>
        {data.map((popular: any) => (
          <div className={styles.popularItem} style={customPopularItemStyles ? customPopularItemStyles.container : undefined}>
            <Link to={popular.link}>
              <img src={popular.image} alt={popular.title} style={customPopularItemStyles ? customPopularItemStyles.image : undefined}/>
              <h3 style={customPopularItemStyles ? customPopularItemStyles.title : undefined}>{popular.title}</h3>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularSection;
