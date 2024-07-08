const CustomInput = ({
  type = "text",
  placeholder,
  label,
  name,
  value,
  onChange,
  readOnly=false,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`border outline-green-500 h-10 w-64 rounded-md pl-2  ${className}`}
      />
    </div>
  );
};
export default CustomInput;
