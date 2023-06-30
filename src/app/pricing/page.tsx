import PricingTable from "@/components/table/PricingTable";
import { Service, euroFormat } from "@/components/table/pricingTypes";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { FC } from "react";
import { data } from "@/components/table/pricingTypes";
import Image from "next/image";

interface PricingProps {}

const Pricing: FC<PricingProps> = ({}) => {
  return (
    <div className="min-h-screen">
      <Image
        height={400}
        width={1000}
        alt="tools"
        src="/pricing_img.png"
        className=" absolute left-0 top-0 z-[-1] h-[350px] w-screen object-cover lg:h-[550px]"
      />
      <h3 className=" mt-20 lg:mt-28 ">Pricing</h3>
      <PricingTable data={data} />
    </div>
  );
};

export default Pricing;
