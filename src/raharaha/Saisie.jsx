import DatepickerRestricted from "../utils/DatepickerRestricted";
import { formatDateFr, formatDate } from "../utils/dateHelper";
import Form from "../utils/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchData } from "../utils/axiosRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Saisie() {

	const [andraikitraParDate, setAndraikitraParDate] = useState([]);
	const [mpitondraRaharaha, setMpitondraRaharaha] = useState([]);
	const [andraikitra, setAndraikitra] = useState([]);
	const [inputsData, setInputsData] = useState([]);
	const [selectedDate, setSelectedDate] = useState( formatDateFr(new Date()));
	const [mambraData, setMambraData] = useState([]);
	const [sampanaData, setSampanaData] = useState([]);

	useEffect(() => {
		fetchData({ type: 'data' }, setMpitondraRaharaha);
		fetchData({ type: 'andraikitraParDate' }, setAndraikitraParDate);
		fetchData({ type: 'andraikitra' }, setAndraikitra);
		fetchData({ type: 'mambra' }, setMambraData);
		fetchData({ type: 'sampana' }, setSampanaData);
	}, []); // Runs when dependency1 or dependency2 changes

	//data pour un input 
	const inputData = {
		name : "",
		type :"",
		defaultValue : "", //value defalut option select (object)
		label :"", //text select
		selectOptions:[]
	}

	const handleDateChange = (objectDate) => {

		setSelectedDate(formatDateFr(objectDate));
		//checker si des data existe pour la date 
		let dateEN = formatDate(objectDate);

		let existingData = mpitondraRaharaha.filter(mr => mr.date === dateEN);

		let dayName  = formatDateFr(objectDate)[1];
		let dateFR  = formatDateFr(objectDate)[0];
		let andraikitraIdsByDayname = andraikitraParDate[dayName] ? andraikitraParDate[dayName] : [];

		const arrInputsData = andraikitraIdsByDayname.map(andrId => {

			let andrObj = getAndraikitraById(andrId);
			//mpitonodra raharha existant pou la date et andraikitra
			let existingMRObj = getRaharahaByIdAndDate(existingData,andrId,dateEN);
			let name = dateFR+"_"+andrObj.id;
			let value = existingMRObj ? parseInt(existingMRObj.id)  : 0; //id de la personne
			let type = "select";
			let label = andrObj.andraikitra;
			let selectOptions = getSelectOptions(andrId);
			let defaultValue = existingMRObj ?{value:existingMRObj.id,label: existingMRObj.prenom}  : {value:0,label:"Select"};

			return { ...inputData,name:name,value:value,type:type,label:label,defaultValue:defaultValue,selectOptions  }

		} )

		setInputsData(arrInputsData);

	}

	function getAndraikitraById(id){
		return andraikitra.find(item => parseInt(item.id) === parseInt(id));
	}

	function getRaharahaByIdAndDate(arrayOfObj,id,date){
		return arrayOfObj.find(obj => parseInt(obj.idRaharaha) === parseInt(id) && obj.date === date ) 
	}

	function getSelectOptions(idAndraikitra){
		//construire un nouveau objet avec mambra 
		const mambraOptions = mambraData.map(m => ({
					value: m.id,
					label: m.prenom
		}))
		const sampanaOptions = sampanaData.map(m => ({
					value: m.id,
					label: m.name
		}))
		const andrFampaherezana = [13];
				
		const options = andrFampaherezana.includes(parseInt(idAndraikitra)) ? sampanaOptions : mambraOptions;
		return options;
	}

	const toastSuccess = (message) => {
		toast.success(message);
	};

	const toastError = (message) => {
		toast.error(message);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		// Iterate over the entries
	
		let andraikitraArray = [];
		for (var pair of formData.entries()) {
		let andraikitra = { date: "", andraikitraId: 0, membreId: 0 };
	
		let [date, andraikitraId] = pair[0].split('_');
		let membreId = pair[1];
	
		andraikitra.date = formatDate(date);
		andraikitra.andraikitraId = parseInt(andraikitraId);
		andraikitra.membreId = parseInt(membreId);
	
		andraikitraArray.push(andraikitra);
		}
	
		console.log("andraikitraArray");
		console.log(andraikitraArray);
	
		// getSubmittedData(andraikitraArray);
	}
	const getSubmittedData = (data) => {
		const dataToSend ={
			...data,dataType:"raharaha"
		}
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
					<Form inputsData={inputsData} handleSubmit={handleSubmit}></Form>
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
  
  
  