import { cn } from "@/utils/functions";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ title, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-[#284B63] rounded text-white font-light hover:bg-[hsl(204,42%,20%)] transition-colors",
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
