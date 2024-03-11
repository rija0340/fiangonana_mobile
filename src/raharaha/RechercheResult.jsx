
function RechercheResult({ dayName, data }) {


    console.log(dayName);
    const hrAfter = ['7', '10', '15'];
    const todisplay = data.map((item, i) => {
        let hrText = '';
        let bgc = '';
        switch (item.idRaharaha) {
            case '7':
                hrText = 'Sabata maraina 9H - 9H20';
                bgc = '#2596be';
                break;
            case '10':
                hrText = 'Culte';
                bgc = '#007e00';
                break;
            case '15':
                hrText = 'Sabata hariva';
                bgc = '#c63939';
                break;
            default:
                hrText = 'Default text';
                bgc = '#936c6c';
        }
        return (
            <>
                <tr key={i}>
                    <td>{item.andraikitra}</td>
                    <td>{item.prenom}</td>

                </tr>
                {
                    hrAfter.includes(item.idRaharaha) &&
                    <tr style={{ backgroundColor: bgc }} > <td colSpan={2} style={{ color: 'white' }} >{hrText}</td></tr>
                }
            </>
        )
    })

    return (
        <>
            {data && data.length > 0 &&

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Andraikitra</th>
                            <th scope="col">Prénom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dayName == 'Sabata' && <>

                            <tr style={{ backgroundColor: 'gray' }}> <td colSpan={2} > Sabata maraina 8H-8H30  </td></tr>

                        </>
                        }
                        {todisplay}
                    </tbody>
                </table>

            }
        </>
    )
}

export default RechercheResult