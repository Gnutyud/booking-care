import React from 'react';
import doctor1 from '../../../../assets/images/doctors/083702tien-si-do-phuong-vinh.jpg';
import doctor2 from '../../../../assets/images/doctors/090559-pgs-nguyen-thi-hoai-an.jpg';
import doctor3 from '../../../../assets/images/doctors/101932-bs-tuyet-nga.jpg';
import doctor4 from '../../../../assets/images/doctors/103447-bs-hong-anh.jpg';
import doctor5 from '../../../../assets/images/doctors/104016-bs-nga.jpg';
import doctor6 from '../../../../assets/images/doctors/105401-bsckii-tran-minh-khuyen.jpg';
import PopularSection from '../PopularSection';

const Doctor_LIST = [
  {
    image: doctor1,
    title: 'TS.DO PHUONG VINH',
    link: '',
  },
  {
    image: doctor2,
    title: 'PGS.NGUYEN THI HOAI AN',
    link: '',
  },
  {
    image: doctor3,
    title: 'BS.TUYET NGA',
    link: '',
  },
  {
    image: doctor4,
    title: 'BS.HONG ANH',
    link: '',
  },
  {
    image: doctor5,
    title: 'BS.NGA',
    link: '',
  },
  {
    image: doctor6,
    title: 'BS.TRAN MINH KHUYEN',
    link: '',
  },
];

const customPopularItemStyles = {
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    margin: '10px 0',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.5)',
  },
  title: {
    marginBottom: '20px',
  },
  container: {
    textAlign: 'center',
    border: '1px solid #eee',
    backgroundColor: 'rgba(255,255,255,1)',
    padding: '0 10px',
  },
};

const Doctor = () => {
  return (
    <PopularSection
      data={Doctor_LIST}
      backgroundColor="#f5f5f5"
      title="Bác sĩ nổi bật tuần qua"
      customPopularItemStyles={customPopularItemStyles}
      button={{ name: 'tìm kiếm', to: '#bacsi' }}
    />
  );
};

export default Doctor;
