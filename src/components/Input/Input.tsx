import "./Input.scss";

export const Input = ({ title, className, onChange, ...props }: any) => {
  return (
    <div className={`input_block ${className}`}>
      {title ? <h3 className="title">{title}</h3> : null}
      <input
        className="input"
        onChange={(v) => onChange([v.target.name, v.target.value])}
        {...props}
      />
    </div>
  );
};
