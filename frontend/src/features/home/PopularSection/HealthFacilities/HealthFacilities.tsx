import React from 'react';
import covidTest from '../../../../assets/images/140801-test-covid.jpg';
import spo2Machine from '../../../../assets/images/163937-microlife-spo2-1.png';
import kitTestCovid from '../../../../assets/images/170022-kit-test-nhanh.png';
import treatAtHome from '../../../../assets/images/dieu-tri-tai-nha.jpg';
import PopularSection from '../PopularSection';

const HealthFacilities_LIST = [
  {
    image: treatAtHome,
    title: 'Tư vấn F0 điều trị tại nhà',
    link: '',
  },
  {
    image: covidTest,
    title: 'Kit Test COVID bằng nước bọt',
    link: '',
  },
  {
    image: spo2Machine,
    title: 'Máy Đo Nồng Độ Oxy Trong Máu',
    link: '',
  },
  {
    image: kitTestCovid,
    title: 'Xét nghiệm COVID',
    link: '',
  },
];

const HealthFacilities = () => {
  return (
    <PopularSection data={HealthFacilities_LIST} backgroundColor="#fff" title="Cơ sở y tế nổi bật" />
  );
};

export default HealthFacilities;
