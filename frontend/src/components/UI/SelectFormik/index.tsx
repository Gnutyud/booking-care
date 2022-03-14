import { useField } from 'formik';
import styles from './SelectFormik.module.scss'

const SelectFormik = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.selectGroup}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : <p></p>}
    </div>
  );
};

export default SelectFormik;
