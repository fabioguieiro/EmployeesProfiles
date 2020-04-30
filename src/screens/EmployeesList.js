import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Breadcumb from '../assets/svg/Group-174.svg';
import './EmployeesList.css';


const employees = [
    {
        id: 0,
        name: 'Eduardo Viana', 
        position: 'UX Designer',
        phoneNumber1: '31 | 9.9147 - 8701',
        phoneNumber2: '31 | 2138 - 2020',
        email: 'eduardo.viana@mundiale.com.br',
        photo: '/photos/0.jpg',
        qrcode: '/photos/eduardo.png'
    },
    {
        id: 2,
        name: 'Fabio Lopes', 
        position: 'Front-end dev',
        phoneNumber1: '31 | 9.9247 - 2727',
        phoneNumber2: '31 | 2138 - 2020',
        email: 'fabioguieiro@gmail.com',
        photo: '/photos/2.jpg',
        qrcode: '/photos/fabio.png'
    },
    {
        id: 1,
        name: 'João da Silva', 
        position: 'Front-end dev',
        phoneNumber1: '31 | 9.9247 - 2727',
        phoneNumber2: '31 | 2138 - 2020',
        email: 'joaosilva@hotmail.com',
        photo: '/photos/1.jpg',
        qrcode: '/photos/joao.png'
    },
]
const letters = employees.map(employee =>{
    return employee?.name.charAt(0).toLowerCase() || ''
})

const MIN_EMPLOYEES = 5
function EmployeesList() {
    const history = useHistory()
    const [selectedLetter, setSelectedLetter] = useState(letters[0]) 
    function chooseEmployeeHandler (employeeId) {
        const employee = employees.find(e => e.id === employeeId)
        history.push(`/employee/${employee.id}`, {employee})
    }
    function selectLetterHandler(letter){
        setSelectedLetter(letter)
    } 
    const filteredEmployees = employees.filter(employee => employee.name.charAt(0).toLowerCase() === selectedLetter)
    const placeholders = MIN_EMPLOYEES - filteredEmployees.length
    const emptySquares = []
    for(let i=0;i<placeholders;i++){
        emptySquares.push(i)
    }
    return (
      <div className="App">
          <img src={Breadcumb} className="App-logo" alt="logo" />
          <div className="letters-menu">
          {letters.map((letter, index) => 
            <a key={index} className="letter" onClick={() => selectLetterHandler(letter)}>{letter.toUpperCase()}</a>
            )}
         </div>
          {
            filteredEmployees.map(employee => ( 
                <div key={employee.id} className="square" onClick={ () => chooseEmployeeHandler(employee.id)}>
                    <img className="card-photo" src={employee.photo}></img>
                    <div className="card-group">
                        <p className="card-name">{employee.name}</p>
                        <p className="card-position">{employee.position}</p>
                    </div>
                    <div className="separator"></div>
                    <p className="plus">+</p>
                </div>
            ))
         }
         {   
            emptySquares.map((square, index) =>(
                <div key={index} className="square-empty">
                </div>
            ))}
      </div>
  );
}

export default  EmployeesList;
