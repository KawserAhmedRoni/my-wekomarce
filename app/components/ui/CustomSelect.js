// components/ui/CustomSelect.js
"use client";

import Select from "react-select";

const customStyles = {
	control: (provided) => ({
		...provided,
		borderRadius: "6px",
		padding: "2px",
		borderColor: "#ccc",
		boxShadow: "none",
		"&:hover": { borderColor: "#999" },
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isFocused ? "#f5f5f5" : "white",
		color: "black",
		padding: "10px",
	}),
};

export default function CustomSelect({
	options,
	onChange,
	placeholder,
	...rest
}) {
	return (
		<Select
			options={options}
			onChange={onChange}
			styles={customStyles}
			placeholder={placeholder || "Select..."}
			{...rest}
		/>
	);
}
