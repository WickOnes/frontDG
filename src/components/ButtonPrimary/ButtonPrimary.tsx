import "./ButtonPrimary.scss";

export const ButtonPrimary = ({ children, ...props }: any) => {
  return (
    <button className="ButtonPrimary" {...props}>
      {children}
    </button>
  );
};
