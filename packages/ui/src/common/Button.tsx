// ✅ 올바른 예시
type ButtonProps = {
  className?: string;
  title?: string;
};

const Button = ({ className, title }: ButtonProps) => {
  return <div className={className}>{title}</div>;
};

export default Button;
