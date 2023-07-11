
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows as rowsData } from '../helpers/helpers';
import { useState } from 'react';
import{Box,Typography,TextField} from '@mui/material'





export default function DataTable() {
  const[rows, setRows] = useState(rowsData)
  const[formState,setFormState] = useState('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setFormState(searchTerm);
    const newRows = rowsData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRows(newRows);
  };

  const handleReset = () => {
    setFormState('');
    setRows(rowsData);
  };
  
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setFormState(searchTerm);
  
    if (searchTerm === '') {
      handleReset();
    }
  };
  const getRowHeight = (): number => 60;
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:2}}>
             <Typography variant='h5'>Projects</Typography>
             <TextField
                  onChange={handleChange}
                  onInput={handleInput}
                  value={formState}
                  variant="outlined"
                  sx={{width:240}}
                  placeholder='Search'
              />
      </Box>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 10]}
        getRowHeight={getRowHeight}
        checkboxSelection
        sx={{fontSize:25}}
      />
    </div>
    </>
  );
}