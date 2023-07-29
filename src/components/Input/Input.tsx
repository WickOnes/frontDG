import "./Input.scss";

export const Input = ({ title, className, ...props }: any) => {
  return (
    <div className={`input_block ${className}`}>
      {title ? <h3 className="title">{title}</h3> : null}
      <input className="input" {...props} />
    </div>
  );
};
