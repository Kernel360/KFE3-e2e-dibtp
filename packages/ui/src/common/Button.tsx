type ButtonProps = {
  className?: string;
  title?: string;
};

const Button = ({ className, title }: ButtonProps) => {
  return (
    <div className={`bg-red-500 text-white p-4 rounded ${className}`}>
      {title}
    </div>
  );
};

export default Button;
