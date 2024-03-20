import Select from "react-select";
import { split } from "postcss/lib/list";
import { formatDate } from "../utils/dateHelper";

function Form({ inputsData,handleSubmit }) {


const inputs = inputsData.map((inputData) => {
  if (inputData.type === "select") {
    return(
      <>
      <label htmlFor="">{inputData.label}</label>
      <Select 
        key={inputData.name}
        options={inputData.selectOptions}
        name={inputData.name}
        defaultValue={inputData.defaultValue}
      />
      </>
    )
  }
 
})
  

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
      {inputs}
      <div className="text-center p-2">
        <button type="submit" className="btn btn-outline-secondary" >OK</button>
      </div>
      </form>
    </>
  );
}

export default Form;
