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
      className={cn("flex gap-2 font-light items-center", className)}
    >
      <SlLocationPin />
      {address}
    </a>
  );
};

export default Address;
