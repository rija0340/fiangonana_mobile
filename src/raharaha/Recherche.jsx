import { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function Recherche() {
	const [date, setDate] = useState(null);
	// const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []); // Runs when dependency1 or dependency2 changes

	const handleDateChange = (e) => {
		console.log("e");
		console.log(formatDate(e));
		setDate();
		if (data != null) {
			const result = data.filter((item) => {
				item.date === formatDate(e);
			});
			console.log("date");
			console.log(result);
		}
		// setData(...dataList);
	}

	const formatDate = (date) => {
		// Extract the year, month, and day
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
		const day = date.getDate().toString().padStart(2, '0');
		// Return the formatted date string
		return `${year}-${month}-${day}`;
	}

	const fetchData = async () => {
		try {
			const response = await axios.get('../../data/data.json');
			setData(response.data);
		} catch (error) {
			console.error('Error fetching data: ', error);
		}
	};

	// 

	return (
		<>
			<h4>Date de recherche</h4>
			<DatePicker selected={date} onChange={handleDateChange} />
			<div className="p-5">
				<h5>Résultat de recherche</h5>
			</div>
		</>
	)
}

export default Recherche