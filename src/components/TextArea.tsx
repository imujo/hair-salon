import { cn } from "@/utils/functions";
import { cva } from "class-variance-authority";
import { FC, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  title: string;
  errorMsg: string | undefined;
  className?: string;
}

const textAreaVariants = cva("mt-2 h-12 w-full rounded px-3", {
  variants: {
    status: {
      default:
        "border-gray-300 outline-gray-400 border-[1px] bg-gray-100 text-gray-800",
      error:
        "border-red-300 outline-red-400 border-2 bg-red-50 placeholder:text-red-400 text-red-400 ",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const TextArea: FC<TextAreaProps> = ({
  id,
  title,
  errorMsg,
  className,
  ...props
}) => {
  const style = !!errorMsg
    ? textAreaVariants({ status: "error" })
    : textAreaVariants({ status: "default" });
  return (
    <div className="mb-6">
      <label htmlFor={id} className=" font-medium">
        {title}
      </label>

      <textarea
        className={cn(style, className, " max-h-48 min-h-[6rem] resize-y pt-2")}
        id={id}
        placeholder={title}
        {...props}
      />

      <p className="mt-1 text-xs text-red-400">{errorMsg}</p>
    </div>
  );
};

export default TextArea;
