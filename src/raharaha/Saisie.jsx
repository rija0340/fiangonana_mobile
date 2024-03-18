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
	// const [existingData, setExistingData] = useState([]);
	const [andraikitraToForm, setAndraikitraToForm] = useState([]);

	useEffect(() => {
		fetchData({ type: 'data' }, setMpitondraRaharaha);
		fetchData({ type: 'andraikitraParDate' }, setAndraikitraParDate);
	}, []); // Runs when dependency1 or dependency2 changes


	const handleDateChange = (objectDate) => {
		setSelectedDate(formatDateFr(objectDate));
		// checkExistingData(objectDate);
		getRaharahaForm(objectDate);

	}

	const getRaharahaForm = (date) => {
		// const keysArray = Object.keys(andraikitraParDate);
		const dayName = formatDateFr(date)[1];
		console.log(formatDate(date));
		const idRaharahaDayName = andraikitraParDate[dayName];
		const existingData = mpitondraRaharaha.filter(raharaha => {
			console.log(raharaha.date + " -- " + formatDate(date));
			return raharaha.date === formatDate(date);
		});
		console.log("existingData");
		console.log(existingData);
		const idExistingRaharaha = existingData.map(item =>
			parseInt(item.idRaharaha)
		)
		//id de tous les raharha pour une date

		//retourner seulement andrakitra non existant pour la date
		const idRaharahaToForm = [];
		idRaharahaDayName.map(item => {

			if (!idExistingRaharaha.includes(parseInt(item))) {
				idRaharahaToForm.push(item);
			}
		})
		setAndraikitraToForm(idRaharahaToForm);

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
				{andraikitraToForm.length > 0 ? (
					<Form getSubmittedData={getSubmittedData} andraikitraToForm={andraikitraToForm} dateArray={selectedDate} />
				) : (
					<div className="text-center">
						<p>Données existant</p>
					</div>
				)}
			</div>
		</>
	)
}

export default Saisie