import PricingTable from "@/components/PricingTable";
import Image from "next/image";
import { getServices } from "@/utils/contentful";

const Pricing = async () => {
  const services = await getServices();

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
      <PricingTable data={services} />
    </div>
  );
};

export default Pricing;
