import React from "react";

type Props = {
  field: string;
};

const LoginButton = (props: Props) => {
  return (
    <div>
      <div className="w-1/5 mx-auto mt-20 p-4 rounded-lg bg-grey shadow border-2 border-lightGreen">
        <p className="text-center text-xl font-semibold">Login</p>
      </div>
    </div>
  );
};

export default LoginButton;
