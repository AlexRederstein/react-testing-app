export default function Select({ options, defaultValue, value, onChange }) {
  console.log("select", value);
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
