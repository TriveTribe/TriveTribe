import React from "react";
import Image from "next/image";

type Props = {};

const LogoComponent = (props: Props) => {
  return (
    <div className="text-[#31B529] text-2xl w-full h-[100px] flex justify-start items-center px-10">
      <Image
        src="/trivetribe.png"
        alt="logo"
        width={200}
        height={200}
        className=""
      />
    </div>
  );
};

export default LogoComponent;
