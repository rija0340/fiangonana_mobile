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
	const [andraikitra, setAndraikitra] = useState([]);
	const [existingData, setExistingData] = useState([]);
	const [andraikitraToForm, setAndraikitraToForm] = useState([]);
	const [seletedDateObject, setSeletedDateObject] = useState(new Date());

	useEffect(() => {
		fetchData({ type: 'data' }, setMpitondraRaharaha);
		fetchData({ type: 'andraikitraParDate' }, setAndraikitraParDate);
		fetchData({ type: 'andraikitra' }, setAndraikitra);
	}, []); // Runs when dependency1 or dependency2 changes


	const handleDateChange = (objectDate) => {
		setSelectedDate(formatDateFr(objectDate));
		setSeletedDateObject(objectDate);
		// checkExistingData(objectDate);
		getRaharahaForm(objectDate);

	}

	const getRaharahaForm = (date) => {
		// const keysArray = Object.keys(andraikitraParDate);
		const dayName = formatDateFr(date)[1];
		console.log(formatDate(date));
		const idRaharahaDayName = andraikitraParDate[dayName];
		//on prend les données existant pour afficher dans le form 
		const existingData = mpitondraRaharaha.filter(raharaha => {
			return raharaha.date === formatDate(date);
		});

		setExistingData(existingData);
		setAndraikitraToForm(idRaharahaDayName);
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
					<Form andraikitraData={andraikitra} getSubmittedData={getSubmittedData}  existingData={existingData} andraikitraToForm={andraikitraToForm} dateArray={selectedDate} dateObject={seletedDateObject} />
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


// [
// 	const inputData =   {
// 		  name 
// 		  value
// 		  type
// 		  label
// 	  }
//   ]
  
//   saisie =>
  
//   saisie par jour
//   saisie par semaine 
  
  
//   - par jour 
  
//   en fonction date 
  
//   on cherche dans data si existing pour la date 
//   on get andraikitra pour la Date
  
//   pour chaque andraikitra de la date donnée 
//   on construit le inputData
  
  
//   {
  
// 	  name  = concant date et andraikitra id
// 	  value  = si existingData (mettre la valeur existatnte ) sinon ""
// 	  type  = en fonction andraikitra (select, input , etc) à etudier 
// 	  label = andraikitra name 
//   }
  
  
  