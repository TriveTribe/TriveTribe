import React from "react";
import Image from "next/image";

type Props = {};

const LogoComponent = (props: Props) => {
  return (
    <div className="text-2xl w-screen h-[100px] flex justify-start items-center px-10 border border-lightGreen">
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
