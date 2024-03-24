import Form from "../utils/Form"
import { useState, useEffect } from "react";
import axios from "axios";
function Saisie() {

    const [filazanaInputs, setFilazanaInputs] = useState([]);

    useEffect(() => {
        setFilazanaInputs([

            {

                label: "mpandefa",
                type: "text",

            },
            {

                label: "andefasana",
                type: "text",

            },
            {

                label: "date",
                type: "date",

            },
            {

                label: "toerana",
                type: "text",

            },
            {

                label: "antony",
                type: "textarea",

            },
            {

                label: "note",
                type: "textarea",

            },
        ])
    }, []); // Runs when dependency1 or dependency2 changes


    const handleSubmit = (e) => {
        let filazana = {
            mpandefa: "",
            andefasana: "",
            date: "",
            toerana: "",
            antony: "",
            note: "",
        }
        e.preventDefault();
        const formData = new FormData(e.target);
        for (var pair of formData.entries()) {
            filazana[pair[0]] = pair[1];

        }
        console.log("filazana");
        console.log(filazana);
        saveData(filazana);
    }

    const saveData = (data) => {
        const toSendData = { ...data, dataType: "filazana" }
        //submission de da
        axios.post('http://localhost/backend_fiangonana_mobile/traitement.php', toSendData, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            console.log('okay');
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <>
            <div className="text-center">
                <h5>Tongasoa eto amin'ny mpitondra rahahraha</h5>
            </div>
            <div className="card p-2">
                <Form inputsData={filazanaInputs} handleSubmit={handleSubmit} ></Form>
            </div>
        </>
    )
}

export default Saisie