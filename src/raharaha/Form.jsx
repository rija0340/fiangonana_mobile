import andraikitra from "./../../data/andraikitra.json";
import SelectC from "./SelectC";
import { split } from "postcss/lib/list";
import { formatDate } from "../utils/dateHelper";

function Form({ andraikitraToForm, getSubmittedData, dateArray }) {

  const handleSelectChange = (e) => {
  }
  
  console.log("andraikitraToForm");
  console.log(andraikitraToForm);
  console.log("dateArray");
  console.log(dateArray);


  let formInputs = "";
  const dayName = dateArray[1];
  const date = dateArray[0];

  formInputs = andraikitra.map((andr) => {
    //on retourne les andraikitra pour un jour et si data n'existe pas pour cette date
    if (andraikitraToForm.includes(parseInt(andr.id))) {
      let name = date + "_" + andr.id;
      return (
        < >
          <label htmlFor="">{andr.andraikitra}</label>
          <SelectC key={andr.id} handleSelectChange={handleSelectChange} name={name} andraikitra={andr.id}  ></SelectC>
        </>
      );
    }
    return null;
  });


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
    getSubmittedData(andraikitraArray);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {formInputs != "" && (
          <>
            {formInputs}

            <div className="text-center m-3">
              <button className="btn btn-outline-success">Enregistrer</button>
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default Form;
