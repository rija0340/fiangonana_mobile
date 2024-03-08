import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from "axios";

function Recherche() {
	const [date, setDate] = useState(null);
	// const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
	const [data, setData] = useState(null);

	const handleDateChange = (e) => {
		setDate(formatDate(e));
		console.log(data);
		fetchData();
		if (data != null) {
			const result = data.filter((item) => {
				console.log(item.date);
				item.date === date;
			});
			console.log("date");
			console.log(date);
			console.log(result);
		}
		// setData(...dataList);
	}

	const formatDate = (dateobj) => {
		const formattedDate = `${dateobj.getFullYear()}-${String(dateobj.getMonth() + 1).padStart(2, '0')}-${String(dateobj.getDate()).padStart(2, '0')}`;
		return formattedDate;
	}

	const fetchData = async (date) => {
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