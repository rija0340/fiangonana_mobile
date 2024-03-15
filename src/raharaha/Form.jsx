import andraikitraParDate from "./../../data/andraikitraParDate.json";
import andraikitra from "./../../data/andraikitra.json";
import SelectC from "./SelectC";

function Form({ dateArray }) {


  const handleSelectChange = (e) =>{
    console.log(e);
  }

  const keysArray = Object.keys(andraikitraParDate);
  let formInputs = "";
  const dayName = dateArray[1];
  const date = dateArray[0];
  //checker si alarobia zoma ou sabata
  if (keysArray.includes(dayName)) {
    const andraikitraListe = andraikitraParDate[dayName];

    formInputs = andraikitra.map((andr) => {
      if (andraikitraListe.includes(parseInt(andr.id))) {
        let name = date+"_"+andr.id;
        return (
          < >
            <label htmlFor="">{andr.andraikitra}</label>
            <SelectC handleSelectChange={handleSelectChange} name={name} key={andr.id}  andraikitra={andr.id}  ></SelectC>
          </>
        );
      }
      return null;
    });
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData =   new FormData(e.target);
    console.log(formData);
  }

  return (
    <>
      <p>ato anaty liste za zao</p>
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
