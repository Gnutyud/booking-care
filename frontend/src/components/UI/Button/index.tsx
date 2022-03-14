import styles from './Button.module.scss';

interface ButtonProps {
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}
const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.name}
    </button>
  );
};

export default Button;
