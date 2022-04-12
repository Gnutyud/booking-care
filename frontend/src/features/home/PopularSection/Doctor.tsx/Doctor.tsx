import React from 'react';
import covidTest from '../../../../assets/images/140801-test-covid.jpg';
import spo2Machine from '../../../../assets/images/163937-microlife-spo2-1.png';
import kitTestCovid from '../../../../assets/images/170022-kit-test-nhanh.png';
import treatAtHome from '../../../../assets/images/dieu-tri-tai-nha.jpg';
import PopularSection from '../PopularSection';

const Doctor_LIST = [
  {
    image: treatAtHome,
    title: 'Tư vấn F0 điều trị tại nhà',
    link: '',
  },
  {
    image: treatAtHome,
    title: 'Tư vấn F0 điều trị tại nhà 111',
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

const customPopularItemStyles = {
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    margin: '10px 0'
  },
  title: {
    marginBottom: '20px'
  },
  container: {
    textAlign: 'center',
    border: '1px solid #eee',
    backgroundColor: 'rgba(255,255,255,1)',
  }
}

const Doctor = () => {
  return (
    <PopularSection data={Doctor_LIST} backgroundColor="#f5f5f5" title="Bác sĩ nổi bật tuần qua" customPopularItemStyles={customPopularItemStyles} />
  );
};

export default Doctor;
