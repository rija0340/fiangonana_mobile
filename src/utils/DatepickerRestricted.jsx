import DatePicker from "react-datepicker";
function DatepickerRestricted({handleDateChange}) {

    const isAllowedDay = (date) => {
		const day = date.getDay();
		return day === 3 || day === 5 || day === 6; 
	}

	return (
		<>
		<DatePicker filterDate={isAllowedDay} className="form-control" onChange={handleDateChange} />
		</>
	)
}

export default DatepickerRestricted