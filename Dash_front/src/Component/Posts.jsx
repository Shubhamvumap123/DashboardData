import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { ShowChart } from './ShowChart'
const columns = [
  { field: 'intensity', headerName: 'Intensity',width: 150 },
  { field: 'likelihood', headerName: 'Likelihood',width: 150 },
  { field: 'relevance', headerName: 'Relevance', width: 150 },
  { field: 'end_year', headerName: 'Year', width: 150 },
  { field: 'country', headerName: 'Country', width: 150 },
  { field: 'topic', headerName: 'Topics', width: 150 },
  { field: 'region', headerName: 'Region', width: 150 },
  { field: 'city', headerName: 'City', width: 150 },

]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chart")
      .then((data) => data.json())
      .then((data) => setTableData(data.Chartmodule))
      .catch((err)=>console.log(err))
  }, [])


  return (
    <div >
      <h1>Data Visualization Dashboard</h1>
      <ShowChart chartData={tableData}/>
      <DataGrid
      style={{ height:500, width:1000}}
        rows={tableData}
        columns={columns}
        getRowId={(row) =>  row._id }
        pageSize={30}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          {console.log(selectionModel)}
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
      />
     
    </div>
  )
}

export default DataTable
