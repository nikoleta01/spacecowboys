import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, className = "", ...props }) => {
  return (
    <button
      className={`bg-primary text-gray-900 px-12 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-colors ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
