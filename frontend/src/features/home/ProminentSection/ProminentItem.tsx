import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProminentSection.module.scss';

interface ProminentItemProps {
  image: string;
  title: string;
  desc: string[];
  link: {name: string, target: string};
}
export const ProminentItem = (props: ProminentItemProps) => {
  return (
    <div className={styles.prominentItem}>
      <div className={styles.itemInfo}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <ul>
        {props.desc.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
      </div>
      <Link to={props.link.target} >{props.link.name} &gt;</Link>
    </div>
  );
};
