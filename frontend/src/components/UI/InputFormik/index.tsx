import { useField } from 'formik';
import styles from './InputFormik.module.scss';
interface InputProps {
  name: string;
  id?: string;
  label: string;
  type: string;
  placeholder?: string;
}
const InputFormik = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : <p></p>}
    </div>
  );
};

export default InputFormik;
