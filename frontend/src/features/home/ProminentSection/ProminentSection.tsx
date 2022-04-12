import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import covidTest from '../../../assets/images/140801-test-covid.jpg';
import spo2Machine from '../../../assets/images/163937-microlife-spo2-1.png';
import kitTestCovid from '../../../assets/images/170022-kit-test-nhanh.png';
import treatAtHome from '../../../assets/images/dieu-tri-tai-nha.jpg';
import { ProminentItem } from './ProminentItem';
import styles from './ProminentSection.module.scss';

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

const PROMINENT_LIST = [
  {
    image: treatAtHome,
    title: 'Tư vấn F0 điều trị tại nhà',
    desc: [
      'Đội ngũ bác sĩ giỏi, giàu kinh nghiệm',
      'Tư vấn F0 điều trị tại nhà',
      'Đối tượng áp dụng: F0, F1',
    ],
    link: { target: '#treat-at-home', name: 'xem chi tiết' },
  },
  {
    image: covidTest,
    title: 'Kit Test COVID bằng nước bọt',
    desc: [
      'Kit Test nhanh bằng nước bọt',
      'Đơn giản, tiện lợi, chính xác',
      'Bộ Y tế Việt Nam cấp chứng nhận',
    ],
    link: { target: '#covid-test', name: 'xem chi tiết' },
  },
  {
    image: spo2Machine,
    title: 'Máy Đo Nồng Độ Oxy Trong Máu',
    desc: [
      'Dùng để đo nồng độ oxy trong máu và nhịp tim của cả người lớn và bệnh nhi',
      'Đo ở ngón tay, không đau khi đo.',
    ],
    link: { target: '#spo2-machine', name: 'xem chi tiết' },
  },
  {
    image: kitTestCovid,
    title: 'Xét nghiệm COVID',
    desc: [
      'Tầm soát và xác định COVID-19',
      'Phương pháp Test nhanh & PCR',
      'Theo quy chuẩn Bộ Y tế',
    ],
    link: { target: '#kit-test-covid', name: 'đặt lịch xét nghiệm' },
  },
];

export const ProminentSection = () => {
  return (
    <div className={styles.prominentSection}>
      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        sliderClass={styles.slider}
      >
        {PROMINENT_LIST.map((prominent) => (
          <ProminentItem
            image={prominent.image}
            title={prominent.title}
            desc={prominent.desc}
            link={prominent.link}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProminentSection;
