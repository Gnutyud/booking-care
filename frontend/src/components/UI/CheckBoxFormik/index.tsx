import { useField } from 'formik';
import styles from './CheckboxFormik.module.scss';

const CheckboxFormik = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <p>{meta.error}</p> : <p></p>}
    </div>
  );
};

export default CheckboxFormik;
