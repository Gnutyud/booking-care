import React from 'react';
import khamChuyenKhoa from '../../../../assets/icons/khamchuyenkhoa.png';
import dichVuXetNghiem from '../../../../assets/icons/dichvuxetnghiem.png';
import goiPhauThuat from '../../../../assets/icons/goi-phau-thuat.png';
import khamTaiNha from '../../../../assets/icons/khamtainha.png';
import khamTongQuat from '../../../../assets/icons/khamtongquat.png';
import khamTuXa from '../../../../assets/icons/khamtuxa.png';
import khamNhaKhoa from '../../../../assets/icons/chuyenkhoa.png';
import sucKhoeTinhThan from '../../../../assets/icons/suckhoetinhthan.png';
import styles from './HeaderOptionItem.module.scss';

const options = [
  {
    icon: khamChuyenKhoa,
    name: 'khám chuyên khoa',
  },
  {
    icon: dichVuXetNghiem,
    name: 'dịch vụ xét nghiệm',
  },
  {
    icon: goiPhauThuat,
    name: 'gói phẫu thuật',
  },
  {
    icon: khamTaiNha,
    name: 'khám tại nhà',
  },
  {
    icon: khamTongQuat,
    name: 'khám tổng quát',
  },
  {
    icon: khamTuXa,
    name: 'khám từ xa',
  },
  {
    icon: khamNhaKhoa,
    name: 'khám nha khoa',
  },
  {
    icon: sucKhoeTinhThan,
    name: 'sức khỏe tinh thần',
  },
];

interface OptionItemProps {
  srcIcon: string;
  name: string;
}

const OptionItem = ({ srcIcon, name }: OptionItemProps) => {
  return (
    <div className={styles.optionItem}>
      <div className={styles.imgBox}>
        <img src={srcIcon} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

const HeaderOptionsList = () => {
  return (
    <div className={styles.optionList}>
      {options.map((option, index) => (
        <OptionItem key={index} srcIcon={option.icon} name={option.name} />
      ))}
    </div>
  );
};

export default HeaderOptionsList;
