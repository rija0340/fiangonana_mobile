import { useState, useEffect } from "react";
import { fetchData } from "../utils/axiosRequest";
function Index() {

    const [filazanaData, setFilazanaData] = useState([]);
    useEffect(() => {
        fetchData({ type: "filazana" }, setFilazanaData);
    }, []); // Runs when dependency1 or dependency2 changes


    const rows = filazanaData.map((item, index) => {
        console.log(item);

        // Use map to iterate over the keys of the item object

        const rows = Object.keys(item).map(key => (
            <>
                <tr key={key}>
                    <td>{key}</td>
                    <td>{item[key]}</td>
                </tr>
            </>
        ));

        // Return the rows
        return rows;
    })


    return (
        <>
            <div className="text-center">
                <h5>Filazan-draharaha</h5>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}

                </tbody>
            </table>

        </>
    )
}

export default Index