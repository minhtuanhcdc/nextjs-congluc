import Layout from '../../layout/layout'
import Button from '../../components/button'
import {useState} from 'react'
import DataTable  from 'react-data-table-component';


const columns = [
    {
        name: '#',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'name',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'birthday',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'jonhSon',
        year: '1988',
        sortable: true,
    },
    {
        id: 2,
        title: 'Anna',
        year: '1984',
    },
    {
        id: 3,
        title: 'Tom',
        year: '1984',
    },
    {
        id: 4,
        title: 'Maget',
        year: '1984',
    },
    {
        id: 5,
        title: 'Tom',
        year: '1984',
    },
    {
        id: 6,
        title: 'Maget',
        year: '1984',
    },
    {
        id: 7,
        title: 'Tom',
        year: '1984',
    },
    {
        id: 8,
        title: 'Maget',
        year: '1984',
    },
    {
        id: 9,
        title: 'Tom',
        year: '1984',
    },
    {
        id: 10,
        title: 'Maget',
        year: '1984',
    },
    {
        id: 11,
        title: 'Tom',
        year: '1984',
    },
    {
        id: 12,
        title: 'Maget',
        year: '1984',
    },
];

const customStyles = {
    rows: {
        style: {
            background:'white',
            minHeight: '40px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};





const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const rowSelectCritera = row => row.fat > 6;
const paginationComponentOptions = {
    rowsPerPageText: 'row/page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

export default function test(){
    const [counter,setCounter] = useState(1)

    const handleIncrement = ()=>{
        setCounter(counter +1)
    }

    


    return(
        <Layout>
            <div className='px-10 flex space-x-3 py-4'>
                <h1>Test</h1>
                <Button prop = {propButton}/>
                <button className='px-4 py-2 bg-green-600 text-white' onClick={handleIncrement}>Increment</button>
                <h2>Counter: {counter}</h2>
            </div>

            <div>
                <DataTable
                fixedHeader
                fixedHeaderScrollHeight="650px"
                    columns={columns}
                    data={data}
                    selectableRows
                    expandableRowsComponent={ExpandedComponent}
                    customStyles={customStyles}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    responsive
                   
                    selectableRowSelected={rowSelectCritera}
                    subHeaderWrap
                    dense
                   
                />
            </div>
        </Layout>
    )
}

const propButton = {
    name:'Test Button',
    classProp:'bg-blue-900 text-white rounded-lg py-1 px-4'
}
