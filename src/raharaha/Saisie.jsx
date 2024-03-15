import DatepickerRestricted from "../utils/DatepickerRestricted";
import { formatDateFr } from "../utils/dateHelper";
import Form from "./Form";
import { useState } from "react";

function Saisie() {

	const [selectedDate,setSelectedDate] = useState(formatDateFr(new Date()));

	const handleDateChange = (e) => {
		setSelectedDate(formatDateFr(e)) ;
	}

	return (
		<>
			<div className="card p-2 mb-2" >
				<h5>Date de saisie</h5>
			<DatepickerRestricted handleDateChange={handleDateChange}></DatepickerRestricted>
			</div>
			<div>
				<Form dateArray={selectedDate} ></Form>
			</div>
		</>
	)
}

export default Saisie