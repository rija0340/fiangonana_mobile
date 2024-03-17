import DataTable from 'react-data-table-component';
function Datatables({ columns, data }) {


    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
}

export default Datatables