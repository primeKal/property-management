import React, { useEffect, useState } from 'react'
import RaisedButton from "material-ui/RaisedButton";
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


function Employees() {
  const [employees, setEmployees] = useState([])
  
  
  const token= localStorage.access_token;
  const getData = async ()=>{
    // axios.get("http://192.168.43.177:8090/api/employee", 
    // { headers: {"Authorization" : `Bearer ${token}`} }).then( (response)=>{
    //   console.log(response);
    // setEmployees(response.data);
    // });
        setEmployees(
      [
        {name : 'Kaleb Teshale',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale2',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale3',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale4',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale5',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale6',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale7',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale8',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},
        {name : 'Kaleb Teshale9',
        email : 'kalebteshale"gmail.com',
        department : 'Software Engineering'},

      ]
    )
  }
  useEffect ( ()=>{
    getData();
  }, []);
  const Navigation = useNavigate();
  const onCreate = ()=>{
    console.log('creating new');
    Navigation('/user/newemployee');

  }
  const onFire = (name) => {
    console.log('with drawing', name)
    const conf= window.confirm('Are you sure?Fire and Delete this employees data?')
    if(conf) {
        console.log(conf)
        console.log(employees.filter(materil => {
            return materil.name !== name;
          }));
        setEmployees(employees =>
            employees.filter(materiL => {
              return materiL.name !== name;
            })
          ); 
    }
}


  return (
    <div>
      {/* <h1 className='head'>list of employees</h1> */}
      <div>
      <RaisedButton
          className="signUpSubmit"
          primary={true}
          label="Create New"
          onClick={onCreate}
        />
        </div>

      <div className="grid-container3">
        {employees.map((item) => {
            return <Employee employee={item} fire={ ()=>{onFire(item.name)}} />
        })
        }
    </div>
    </div>
  )
}

export default Employees
function Employee (props) {
  const onFire = ()=>{
    console.log('dfghjk');
  }
  return (
    <div className='grid-container3'>
                <Link to ='#'>
              <h3>{props.employee.name}</h3>
              <p>{props.employee.department} <br></br>
              {props.employee.email}</p>
              <RaisedButton
          className="signUpSubmit"
          primary={true}
          label="Fire"
          onClick={props.fire}
        />
          </Link>
    </div>
  )
}