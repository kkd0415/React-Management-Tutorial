import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { makeStyles } from '@mui/styles'

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/64/64',
    'name': '홍길동',
    'birthday': '545454',
    'gender': 'Man',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/64/64',
    'name': '이몽룡',
    'birthday': '898989',
    'gender': 'Man',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/64/64',
    'name': '성춘향',
    'birthday': '121212',
    'gender': 'Women',
    'job': '대학생'
  },
]

function App() {
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
          {
            customers.map(m => {
              return (
                <Customer
                  key={m.id}
                  id={m.id}
                  image={m.image}
                  name={m.name}
                  birthday={m.birthday}
                  gender={m.gender}
                  job={m.job}
                />
              )
            })
          }
        </TableBody>
      </Table>
    </Paper>

  );
}

export default App;
