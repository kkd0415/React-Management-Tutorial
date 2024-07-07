import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
    <div>
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
    </div>

  );
}

export default App;
