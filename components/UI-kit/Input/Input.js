import styles from './Input.module.scss';

const Input = ({ placeholder, title, type, value, onChange, name }) => {
  return (
    <div className={styles.component}>
      <label>
        <span>{title}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
    </div>
  );
};

export default Input;
