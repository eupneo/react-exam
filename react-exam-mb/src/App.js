import './App.css';
import {Button} from "@mui/material";
import axios from "./servecis/axios.js";
import { useEffect, useState } from 'react';
import User from "./User.js";
import Workorder from "./Workorder.js";

function App() {
  const [data, setData] = useState();
  const [users, setUsers] = useState();

  const fetchUsers = async function () {
    const getUsers = await axios.get("/users");
    setData(getUsers);
  };

  const fetchWorkorders = async function () {
    const getWorkorders = await axios.get("/orders");
    const getUsers = await axios.get("/users");
    setUsers(getUsers);
    setData(getWorkorders);
  };
  
  useEffect(()=>{
    console.log(data);
  }, [data])

  return (
    <div className="App">
      <div style={{display: "flex", height: "100vh", width: "100vw", justifyContent: "start", alignItems: "center", flexDirection: "column"}}>
          <div style={{flexDirection: "row", margin: 10}}>
            <Button type="text" onClick={fetchUsers}>
              Users
            </Button>
            <Button type="text" onClick={fetchWorkorders}>
              Workorders
            </Button>
          </div>
          <div style={{display: "flex", flexFlow: "wrap", flexDirection: "row", justifyContent: "Space-evenly", width: "90vw"}}>
            {data && data.data.map((d)=>{
              if (data.data[0].email){
                return <User email={d.email}
                    hPD={d.hourPerDay}
                    hPW={d.hourPerWeek}
                    role={d.role}
                    key={d.email}
              />
              }else{
                return <Workorder acronym={d.acronym}
                      cY={d.competenceYear}
                      eEH={d.estimatedEffortHours}
                      wH={d.workedHours}
                      users={users}
                      key={d.acronym}
              />
              }
            })}
          </div>  
        </div>
    </div>
  );
}

export default App;
