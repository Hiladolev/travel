import "./SingleVacAdmin.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, ButtonGroup, CardHeader, Fab } from "@mui/material";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import AlertDialog from "../AlertDialog";

interface vacProps {
  id: number;
  destination: string;
  description: string;
  startDate: Date;
  endDate: Date;
  price: number;
  image: string;
  edit: (id: number) => void;
}

const formatDate = (date: Date): string => {
  const formattedDate = new Date(date).toISOString().split("T")[0];
  const myNewDate = formattedDate.split("-");
  return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};
function SingleVac(props: vacProps): JSX.Element {
  const editVacation = () => {
    props.edit(props.id);
  };

  return (
    <Grid item xs={3}>
      <Card
        variant="outlined"
        className="card"
        sx={{ width: 300, height: 370, maxHeight: 370, maxWidth: 300 }}
      >
        <Box>
          <Fab
            variant="extended"
            size="small"
            style={{
              position: "absolute",
              top: 8,
              left: 4,
            }}
            onClick={editVacation}
          >
            <EditIcon />
          </Fab>
          <AlertDialog id={props.id} />
        </Box>
        <CardMedia
          component="img"
          height="190"
          src={`http://localhost:4000/images/${props.image}`}
          alt={props.destination}
        />
        <CardContent>
          <Typography variant="h5">{props.destination}</Typography>
          <Typography variant="body2" color="text.secondary">
            {formatDate(props.startDate)} - {formatDate(props.endDate)} <br />
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <Button color="primary" variant="contained">
          ${props.price}
        </Button>
      </Card>
    </Grid>
  );
}

export default SingleVac;
