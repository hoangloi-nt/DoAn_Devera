import React from "react";

const Heading = ({ title = "", desc = "", children }) => {
  return (
    <div className="mt-10 flex items-start justify-between border-b border-b-zinc-400 border-opacity-20 ">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default Heading;
