"use client";
import React, { useState } from "react";

type Props = {
  title: string;
  type: string;
  children?: React.ReactNode;
};

const HeaderComponent = (props: Props) => {
  const [showForm, setShowForm] = useState(false);

  const renderChildren = () => {
    return React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, {
        setShowform: setShowForm,
      });
    });
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green text-white rounded-xl w-[100px] h-[50px] mx-10 shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
      >
        {props.title}
      </button>

      {showForm && props.children && (
        <>
          <div className="fixed inset-0 bg-white bg-opacity-50"></div>
          {renderChildren()}
        </>
      )}
    </div>
  );
};

export default HeaderComponent;
