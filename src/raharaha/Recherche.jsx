import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import RechercheResult from "./RechercheResult";

function Recherche() {
	const [date, setDate] = useState([]);
	// const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
	const [data, setData] = useState(null);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []); // Runs when dependency1 or dependency2 changes

	const handleDateChange = (e) => {
		console.log("e");
		console.log(e);

		setDate(formatDateFr(e));
		if (data != null) {
			let dataFiltered = data.filter((item) => {
				return item.date == formatDate(e);
			});
			dataFiltered = sortObjectsByRaharahaOrder(dataFiltered);
			setFilteredData(dataFiltered);

		}
	}

	const formatDate = (date) => {
		// Extract the year, month, and day
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
		const day = date.getDate().toString().padStart(2, '0');
		// Return the formatted date string
		return `${year}-${month}-${day}`;
	}

	const formatDateFr = (date) => {
		// Extract the year, month, and day
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
		const day = date.getDate().toString().padStart(2, '0');

		// Get the day name
		const days = ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Sabata"];
		const dayName = days[date.getDay()];
		// Return the formatted date string
		return [`${day}/${month}/${year}`, dayName];
	}

	const fetchData = async () => {
		try {
			const response = await axios.get('../../data/data.json');
			setData(response.data);
		} catch (error) {
			console.error('Error fetching data: ', error);
		}
	};

	// Function to sort objects based on the order of idRaharaha in the reference array
	const sortObjectsByRaharahaOrder = (objects) => {
		const idRaharahaOrder = ["5", "6", "7", "9", "10", "14", "15", "12"];
		return objects.sort((a, b) => {
			return idRaharahaOrder.indexOf(a.idRaharaha) - idRaharahaOrder.indexOf(b.idRaharaha);
		});
	}

	return (
		<>
			<div className="card p-2" >
				<h5>Date de recherche</h5>
				<DatePicker className="form-control" onChange={handleDateChange} />
			</div>
			{filteredData && filteredData.length > 0 && (
				<>
					< div className="p-5 text-center">
						<h5>Mpitondra raharaha</h5>
						<h6>  {date[1]} -  {date[0]}</h6>
					</div >
					<RechercheResult dayName={date[1]} data={filteredData} ></RechercheResult>
				</>
			)}
		</>
	)
}

export default Recherche