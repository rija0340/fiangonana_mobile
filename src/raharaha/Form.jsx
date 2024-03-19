import andraikitra from "./../../data/andraikitra.json";
import dataMpitondraRaharaha from "./../../data/data.json";
import SelectC from "./SelectC";
import { split } from "postcss/lib/list";
import { formatDate } from "../utils/dateHelper";

function Form({ arrayInputs }) {

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
