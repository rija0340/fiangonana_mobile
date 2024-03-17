import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import RechercheResult from "./RechercheResult";
import DatepickerRestricted from "../utils/DatepickerRestricted";
import { formatDateFr, formatDate } from "../utils/dateHelper";


function Recherche() {
	const [date, setDate] = useState([]);
	// const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
	const [data, setData] = useState(null);
	const [filteredData, setFilteredData] = useState([]);
	const [andraikitra, setAndraikitra] = useState([]);

	useEffect(() => {
		fetchData();
		fetchAndraikitra();
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

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost/backend_fiangonana_mobile/traitement.php', {
				params: {
					type: 'data'
				}
			}
			);
			setData(response.data);
			console.log("response.data");
			console.log(response.data);
		} catch (error) {

			console.error('Error fetching data: ', error);
		}
	};

	const fetchAndraikitra = async () => {
		try {
			const response = await axios.get('http://localhost/backend_fiangonana_mobile/traitement.php', {
				params: {
					type: 'andraikitra'
				}
			});
			setAndraikitra(response.data);
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
			<div className="card p-2 mb-2" >
				<h5>Date de recherche</h5>
				<DatepickerRestricted handleDateChange={handleDateChange} />
			</div>
			{filteredData && filteredData.length > 0 && (
				<>
					<div className="card p-2">

						< div className="p-3 text-center">
							<h5>Mpitondra raharaha</h5>
							<h6>  {date[1]} -  {date[0]}</h6>
						</div >
						<RechercheResult dayName={date[1]} data={filteredData} andraikitra={andraikitra} ></RechercheResult>
					</div>
				</>
			)}

			{filteredData && filteredData.length == 0 && (<div className="text-center pt-3"> <p>	Pas de données </p> </div>)}
		</>
	)
}

export default Recherche