
import { Link } from "react-router-dom";
import { fetchData } from "../utils/axiosRequest";
import { useState, useEffect } from "react";
import Datatables from "../utils/Datatables";

function Mambra() {

    const [mambras, setMambras] = useState([]);

    useEffect(() => {
        fetchData({ type: 'mambra' }, setMambras);
    }, []); // Runs when dependency1 or dependency2 changes

    const mambraColumns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'prénom',
            selector: row => row.prenom,
            sortable: true
        },
    ];

    return (
        <>
            <div className="text-center">
                <h5>Liste mambra</h5>
            </div>

            <Datatables columns={mambraColumns} data={mambras}  ></Datatables>

        </>
    )
}

export default Mambra