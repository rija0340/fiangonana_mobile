
import andraikitraParDate from './../../data/andraikitraParDate.json';
import andraikitra from './../../data/andraikitra.json';

function Form({dayName}) {
   
   const andraikitraListe = andraikitraParDate[dayName];

   const formInputs = andraikitra.map((andr)=>{
       console.log("andr.id");
    console.log(typeof andr.id);
    console.log(andraikitraListe);
     if (andraikitraListe.includes(parseInt(andr.id) )) {
        return (<>
            <label htmlFor="">{andr.andraikitra}</label>
            <input type="text" className="form-control" name="{andr.andraikitra}" />
        </>)
     }
     return null;
   })

	return (
		<>
			<p>ato anaty liste za zao</p>
            <form action="">
                {formInputs}
                <div className="text-center m-3">
                    <button className="btn btn-outline-success">Enregistrer</button>
                </div>
            </form>
		</>
	)
}

export default Form