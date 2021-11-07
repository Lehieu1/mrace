import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Show from './Components/Show'

function App() {
  const [Students, setStudents] = useState([{
    name: 'Hieu',
    age: 18
  },])
  const HandleChangeStudent = std => {
    const newStudents = [...Students]
    newStudents.push(std);
    setStudents(newStudents);
  }
  return (
    <div className="App">
      <Form Add={HandleChangeStudent} />
      {Students.map(student => (
        <Show student={student} />
      ))}
    </div>
  );
}

export default App;
