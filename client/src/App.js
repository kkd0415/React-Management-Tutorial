import { useEffect, useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';


function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
    .then((res) => res.json())
    .then((data) => setCustomers(data));
  }, []);

  return (
    <Paper sx={{overflowX: 'auto'}}>
      <Table sx={{ minWidth: '1080px'}}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customers ? customers.map(m => 
            { return (<Customer key={m.id} id={m.id} image={m.image} name={m.name} birthday={m.birthday} gender={m.gender} job={m.job} /> )
          }) : ""}
        </TableBody>
      </Table>
    </Paper>

  );
}

export default App;
