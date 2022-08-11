import React, { useEffect, useState } from 'react'

import { Link} from 'react-router-dom';

function Employees() {
  const [employees, setEmployees] = useState([])
  const getData = async ()=>{
        setEmployees(
      [
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},

      ]
    )
  }
  useEffect ( ()=>{
    getData();
  }, []);


  return (
    <div>
      <h1 className='head'>list of employees</h1>
      <div>
          <button>Create New</button>
        </div>

      <div className="grid-container3">
        {employees.map((item) => {
            return <Employee employee={item} />
        })
        }
    </div>
    </div>
  )
}

export default Employees
function Employee (props) {
  return (
    <div className='grid-container3'>
                <Link to ='#'>
              <h3>{props.employee.name}</h3>
              <p>{props.employee.department} <br></br>
              {props.employee.email}</p>
                  <button>Fire</button>
          </Link>
    </div>
  )
}