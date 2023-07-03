import { FC } from "react";

const notFound: FC = ({}) => {
  return (
    <div className="fixed right-1/2 top-1/2 translate-x-[50%] translate-y-[-140%] text-2xl lg:text-4xl">
      404 Not Found
    </div>
  );
};

export default notFound;
