import styles from './TextArea.module.scss';

const TextArea = ({ placeholder, title, type, value, onChange, name }) => {
  return (
    <div className={styles.component}>
      <label>
        <span>{title}</span>
        <textarea
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          rows='4'
        />
      </label>
    </div>
  );
};

export default TextArea;
