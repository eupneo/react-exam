import {Card, CardContent, CardMedia, Typography} from "@mui/material";

function User({email, hPD, hPW, role}) {

  return (
    <Card style={{margin: 10, backgroundColor: "#FFFDD0"}}>
        <CardMedia
        component="img"
        height="140"
        image="https://www.focus.it/site_stored/imgs/0004/044/reu_rtx2eryb.1020x680.jpg"
        alt="Harambe"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Role: {role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hours per day: {hPD}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hours per week: {hPW}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default User;