import React from "react";

type Props = {
  msg: string;
};

const TextComponent = (props: Props) => {
  return (
    <div className="p-8 w-3/4 flex h-[200px] border-2 rounded-xl">
      <p className="text-xl">{props.msg}</p>
    </div>
  );
};

export default TextComponent;
