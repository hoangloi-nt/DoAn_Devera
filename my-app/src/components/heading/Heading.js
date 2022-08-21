import React from "react";

const Heading = ({ title = "", desc = "", children }) => {
	return (
		<div className="flex items-start justify-between mt-16 border-b border-b-zinc-400 border-opacity-20 ">
			<div>
				<h1 className="text-2xl font-semibold">{title}</h1>
				<p>{desc}</p>
			</div>
			{children}
		</div>
	);
};

export default Heading;
