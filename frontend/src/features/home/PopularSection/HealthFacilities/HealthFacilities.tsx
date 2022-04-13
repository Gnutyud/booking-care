import React from 'react';
import bvBaoSon from '../../../../assets/images/hopistals/001823bao-son-hospital.jpg';
import bvThanhNhan from '../../../../assets/images/hopistals/082317benh-vien-thanh-nhan.jpg';
import bvAnViet from '../../../../assets/images/hopistals/090854-bv-an-viet1.jpg';
import bvThuCuc from '../../../../assets/images/hopistals/093035-benh-vien-thu-cuc-1.jpg';
import bvChoRay from '../../../../assets/images/hopistals/095119-benh-vien-cho-ray-h1.jpg';
import bvVietDuc from '../../../../assets/images/hopistals/114348-bv-viet-duc.jpg';
import pkMeditec from '../../../../assets/images/hopistals/163407phong-kham-meditec.jpg';
import PopularSection from '../PopularSection';

const HealthFacilities_LIST = [
  {
    image: bvThuCuc,
    title: 'Bệnh viện Thu Cúc',
    link: '',
  },
  {
    image: bvBaoSon,
    title: 'Bệnh viên Bảo Sơn',
    link: '',
  },
  {
    image: bvThanhNhan,
    title: 'Bệnh viện Thanh Nhàn',
    link: '',
  },
  {
    image: bvAnViet,
    title: 'Bệnh viện Việt An',
    link: '',
  },
  {
    image: bvChoRay,
    title: 'Bệnh viện Chợ Rẫy',
    link: '',
  },
  {
    image: bvVietDuc,
    title: 'Bệnh viện Việt Đức',
    link: '',
  },
  {
    image: pkMeditec,
    title: 'Phòng khám Meditec',
    link: '',
  },
];

const HealthFacilities = () => {
  return (
    <PopularSection
      data={HealthFacilities_LIST}
      backgroundColor="#fff"
      title="Cơ sở y tế nổi bật"
      button={{ name: 'tìm kiếm', to: '#cosoyte' }}
    />
  );
};

export default HealthFacilities;
