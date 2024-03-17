import DatepickerRestricted from "../utils/DatepickerRestricted";
import { formatDateFr, formatDate } from "../utils/dateHelper";
import Form from "./Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchData } from "../utils/axiosRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Saisie() {

	const [andraikitraParDate, setAndraikitraParDate] = useState([]);
	const [selectedDate, setSelectedDate] = useState(formatDateFr(new Date()));
	const [mpitondraRaharaha, setMpitondraRaharaha] = useState([]);
	const [existingData, setExistingData] = useState([]);
	const [andraikitraToForm, setAndraikitraToForm] = useState([]);

	useEffect(() => {
		fetchData({ type: 'data' }, setMpitondraRaharaha);
		fetchData({ type: 'andraikitraParDate' }, setAndraikitraParDate);
	}, [selectedDate]); // Runs when dependency1 or dependency2 changes


	const handleDateChange = (objectDate) => {
		setSelectedDate(formatDateFr(objectDate));
		checkExistingData(objectDate);
		getRaharahaForm(formatDateFr(objectDate));

	}

	const getRaharahaForm = (date) => {
		// const keysArray = Object.keys(andraikitraParDate);
		const dayName = date[1];

		const idRaharahaDayName = andraikitraParDate[dayName];

		const idExistingRaharaha = existingData.map(item =>
			parseInt(item.idRaharaha)
		)
		//id de tous les raharha pour une date
		console.log("idRaharahaDayName");
		console.log(idRaharahaDayName);

		//retourner seulement andrakitra non existant pour la date
		const idRaharahaToForm = [];
		idRaharahaDayName.map(item => {

			if (!idExistingRaharaha.includes(parseInt(item))) {
				idRaharahaToForm.push(item);
			}

		})
		this.forceUpdate();
		setAndraikitraToForm(idRaharahaToForm);
	}

	// Check if all elements in the idExistingRaharaha array are present in the idRaharahaDayName array as idRaharaha

	const checkExistingData = (date) => {
		let searchDate = formatDate(date);
		const existingData = mpitondraRaharaha.filter(raharaha => {
			return raharaha.date === searchDate;
		});
		console.log("searchDate");
		console.log(searchDate);
		setExistingData(existingData);
	}

	const toastSuccess = (message) => {
		toast.success(message);
	};

	const toastError = (message) => {
		toast.error(message);
	};

	const getSubmittedData = (data) => {
		//submission de da
		axios.post('http://localhost/backend_fiangonana_mobile/traitement.php', data, {
			headers: { 'Content-Type': 'application/json' }
		}).then(response => {
			if (response.data.status === 'success') {
				toastSuccess("Enregistrement fait");
			} else {
				toastError("Echec enregistrement");
			}
		}).catch(error => {
			console.error(error);
		});
	}

	return (
		<>
			<ToastContainer />
			<div className="card p-2 mb-2" >
				<h5>Date de saisie</h5>
				<DatepickerRestricted handleDateChange={handleDateChange}></DatepickerRestricted>
			</div>
			<div className="text-center m-4">
				<h5> {selectedDate[1] + "-" + selectedDate[0]} </h5>
			</div>
			<div className="card p-2">
				<Form getSubmittedData={getSubmittedData} andraikitraToForm={andraikitraToForm} dateArray={selectedDate} ></Form>
			</div>
		</>
	)
}

export default Saisie