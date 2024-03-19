import andraikitra from "./../../data/andraikitra.json";
import dataMpitondraRaharaha from "./../../data/data.json";
import SelectC from "./SelectC";
import { split } from "postcss/lib/list";
import { formatDate } from "../utils/dateHelper";

function Form({ andraikitraData,andraikitraToForm, existingData ,getSubmittedData, dateArray,dateObject }) {

  const handleSelectChange = (e) => {
  }
  const dayName = dateArray[1];
  const date = dateArray[0];

  //on loop tous les andraikitra
  // formInputs = andraikitra.map((andr) => {
  //   //on prend ceux qui correspondent à la date
  //   if (andraikitraToForm.includes(parseInt(andr.id))) {
  //     let name = date + "_" + andr.id;
  //     return (
  //       < >
  //         <label htmlFor="">{andr.andraikitra}</label>
  //         <SelectC key={andr.id} handleSelectChange={handleSelectChange} name={name} andraikitra={andr.id}  ></SelectC>
  //       </>
  //     );
  //   }
  //   return null;
  // });

  /**
   * 
   * @param {*} array array de recherche
   * @param {*} objectKey string objectId : id de l'objet dans array
   * @param {*} searchedKey key à rechercher dans array
   * @returns object
   */
  const searchInArrayOfObject = (array,objectKey,searchedKey,type = "string") => {
    if(type === 'integer'){
      let foundObject = array.find(item => parseInt(item[objectKey])  === parseInt(searchedKey))
      return foundObject;
    }else{
      let foundObject = array.find(item => item[objectKey]  === searchedKey)
      return foundObject;
    }
  }


  const formInputs = andraikitraToForm.map(andrId=>{
    const andraikitraForDayName = searchInArrayOfObject(andraikitra,'id',andrId,"integer");
    //checker s'il existe un data pour cette date et pour l'andraikitra 
    let foundObject = null;
    if(existingData.length > 0 ){
      foundObject = existingData.find(item => parseInt(item.idRaharaha)  === parseInt(andraikitraForDayName.id) && item.date === formatDate(dateObject) )
    }

    if(foundObject !== null){
      console.log("foundObject");
      console.log(foundObject);
     let nameSelect = foundObject.date + "_" + foundObject.idRaharaha;
        let andrName = getAndraikitraNameById(foundObject.idRaharaha);
        console.log("andrName");
        console.log(andrName);
      return (
        < >
          <label htmlFor="">{andrName}</label>
          <SelectC key={foundObject.idRaharaha} handleSelectChange={handleSelectChange} name={nameSelect} andraikitra={foundObject.idRaharaha}  ></SelectC>
        </>
      );
    }else{
      return null

    }


  })

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

  function getAndraikitraNameById (id){
   
    const andrObj = andraikitraData.find(item =>  parseInt(item.id)  === parseInt(id));
    return andrObj.andraikitra;

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
