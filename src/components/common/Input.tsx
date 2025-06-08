interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  rightIcon?: ReactNode;
}

import { ReactNode } from "react";

function Input({
  type,
  placeholder,
  className = "",
  rightIcon,
  ...props
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-4 pr-10 rounded-sm bg-white shadow-inner border-0 focus:ring-2 focus:ring-grey-800 focus:outline-none ${className}`}
        {...props}
      />
      {rightIcon && (
        <div className="absolute inset-y-0 right-3 flex items-center text-green-500 pointer-events-none">
          {rightIcon}
        </div>
      )}
    </div>
  );
}

export default Input;
