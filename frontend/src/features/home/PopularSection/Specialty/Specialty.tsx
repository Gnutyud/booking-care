import React from 'react';
import taiMuiHong from '../../../../assets/images/specialties/095722tai-mui-hong.jpg';
import coXuongKhop from '../../../../assets/images/specialties/120331-co-xuong-khop.jpg';
import timMach from '../../../../assets/images/specialties/120741-tim-mach.jpg';
import thanKinh from '../../../../assets/images/specialties/121042-than-kinh.jpg';
import cotSong from '../../../../assets/images/specialties/121215-cot-song.jpg';
import chamCuu from '../../../../assets/images/specialties/121305-cham-cuu.jpg';
import yHocCoTruyen from '../../../../assets/images/specialties/121232-y-hoc-co-truyen.jpg';
import tieuHoa from '../../../../assets/images/specialties/120933-tieu-hoa.jpg';
import PopularSection from '../PopularSection';

const SPECIALTY_LIST = [
  {
    image: tieuHoa,
    title: 'Tiêu hóa',
    link: '',
  },
  {
    image: taiMuiHong,
    title: 'Tai mũi họng',
    link: '',
  },
  {
    image: coXuongKhop,
    title: 'Cơ xương khớp',
    link: '',
  },
  {
    image: timMach,
    title: 'Tim mạch',
    link: '',
  },
  {
    image: thanKinh,
    title: 'Thần kinh',
    link: '',
  },
  {
    image: cotSong,
    title: 'Cột sống',
    link: '',
  },
  {
    image: chamCuu,
    title: 'Châm cứu',
    link: '',
  },
  {
    image: yHocCoTruyen,
    title: 'Y học cổ truyền',
    link: '',
  },
];

const Specialty = () => {
  return (
    <PopularSection
      data={SPECIALTY_LIST}
      backgroundColor="#f5f5f5"
      title="Chuyên khoa phổ biến"
      button={{ name: 'xem thêm', to: '#chuyenkhoa' }}
    />
  );
};

export default Specialty;
