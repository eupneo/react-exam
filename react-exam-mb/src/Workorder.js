import {Button, Card, CardActions, CardContent, CardMedia, Typography, FormControl, Select, InputLabel, MenuItem} from "@mui/material";
import { useState } from 'react';

function Workorder({acronym, cY, eEH, wH, users}) {

  const [user, setUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const addUser = (user, workorder) =>{
    //Call to set the user to the workorder
    console.log(user, workorder);
  }

  return (
    <Card style={{margin: 10, backgroundColor: "#FFFDD0"}}>
        <CardMedia
        component="img"
        height="140"
        image="https://www.dolcegiornale.it/wp-content/uploads/sites/32/2019/05/CRS-InCroissanteriaCarobbio-009-5293.jpg"
        alt="Lab"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {acronym}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Competence year: {cY}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estimate effort hours: {eEH}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Worked hours: {wH}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "Space-evenly" }}>
      <FormControl fullWidth>
        <InputLabel id="user-select-label">USER</InputLabel>
          <Select
            labelId="user-select-label"
            id="user-select"
            value={user}
            label="User"
            onChange={handleChange}
          >
            {users.data.map((u)=>{
              return <MenuItem key= {u.email} value={u.email}>{u.email}</MenuItem>
            })}
          </Select>
        </FormControl>
        <Button size="small" onClick={()=> addUser(user, acronym)}>ADD</Button>
      </CardActions>
    </Card>
  );
}

export default Workorder;