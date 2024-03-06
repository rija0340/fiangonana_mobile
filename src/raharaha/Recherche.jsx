import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Recherche() {
	const [startDate, setStartDate] = useState(new Date());

	const handleDateChange = (e) => {
		console.log(formatDate(e));
		// setStartDate(dateValue);
	}

	const formatDate = (dateobj) => {
		const formattedDate = `${dateobj.getFullYear()}-${String(dateobj.getMonth() + 1).padStart(2, '0')}-${String(dateobj.getDate()).padStart(2, '0')}`;
		return formattedDate;
	}

	return (
		<>
			<h4>Date de recherche</h4>
			<DatePicker selected={startDate} onChange={handleDateChange} />
		</>
	)
}

export default Recherche