import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import styles from './PopularSection.module.scss';

interface PopularProps {
  data: {
    image: string;
    title: string;
    link: string;
  }[];
  backgroundColor: string;
  title: string;
  customPopularItemStyles?: {
    image?: {};
    title?: {};
    container?: {};
    containerA?: {};
  };
  button: {
    name: string;
    to: string;
  };
  responsive?: {};
}

const defaultResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
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

export const PopularSection = ({
  data,
  backgroundColor,
  title,
  customPopularItemStyles,
  button,
  responsive,
}: PopularProps) => {
  return (
    <div className={styles.popular} style={{ backgroundColor: backgroundColor }}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Link to={button.to}>{button.name}</Link>
      </div>
      <Carousel
        responsive={responsive || defaultResponsive}
        sliderClass={styles.customSlider}
        itemClass={styles.customItem}
        arrows={true}
        autoPlay={false}
        shouldResetAutoplay={true}
      >
        {data.map((popular) => (
          <div
            className={styles.popularItem}
            style={customPopularItemStyles ? customPopularItemStyles.container : undefined}
          >
            <Link
              to={popular.link}
              style={customPopularItemStyles ? customPopularItemStyles.containerA : undefined}
            >
              <img
                src={popular.image}
                alt={popular.title}
                style={customPopularItemStyles ? customPopularItemStyles.image : undefined}
              />
              <h3 style={customPopularItemStyles ? customPopularItemStyles.title : undefined}>
                {popular.title}
              </h3>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularSection;
