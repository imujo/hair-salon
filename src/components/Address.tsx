import { cn } from "@/utils/functions";
import { FC } from "react";
import { SlLocationPin } from "react-icons/sl";
interface AddressProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  address: string;
}

const Address: FC<AddressProps> = ({ href, address, className, ...props }) => {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      className={cn("flex items-center gap-2 font-light", className)}
    >
      <SlLocationPin />
      {address}
    </a>
  );
};

export default Address;
