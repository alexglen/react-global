import styles from './Select.module.scss';

const Select = ({ title, options, name, value, onChange }) => {
  return (
    <div className={styles.component}>
      <label>
        <span>{title}</span>
        <select name={name} value={value} onChange={onChange}>
          {[...new Set(options)].map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
