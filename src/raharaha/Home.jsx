import Calendar from "../utils/Calendar"
import { useState,useEffect } from "react";
import axios from "axios";

function Index() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		fetchMpitondraRaharaha();
	}, []); // Runs when dependency1 or dependency2 changes

	const fetchMpitondraRaharaha = async () => {
		try {
			const response = await axios.get("./../data/data.json", {
				params: {
					type: 'data'
				}
			});
			const eventsArray = response.data.map(mr => {
					return {
						title : mr.andraikitra + " : " + mr.prenom,
						date : mr.date
					}
				})
				console.log("eventsArray");
				console.log(eventsArray);
			setEvents(eventsArray);
		} catch (error) {
			console.error('Error fetching data: ', error);
		}
	};
	
	return (
		<>
			<div className="text-center">
				<h5>Tongasoa eto amin'ny mpitondra rahahraha</h5>
			</div>
			<Calendar events={events}></Calendar>
		</>
	)
}

export default Index