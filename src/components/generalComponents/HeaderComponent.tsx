import React from "react";

type Props = {
  title: string;
};

const HeaderComponent = (props: Props) => {
  return (
    <div className="text-[#31B529] p-8 w-full flex">
      <p className="text-4xl">{props.title}</p>
    </div>
  );
};

export default HeaderComponent;
