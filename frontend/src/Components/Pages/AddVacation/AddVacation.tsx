import Vacation from "../../Models/Vacation";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { travel } from "../../Redux/TravelApp";
import axios from "axios";
import { addVacationAction } from "../../Redux/VacationReducer";
import FormData from "form-data";

function AddVacation(): JSX.Element {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vacation>();

  const addNewVacation = (newVacation: Vacation) => {
    const vac = new FormData();
    vac.append("destination", newVacation.destination);
    vac.append("description", newVacation.description);
    vac.append("startDate", newVacation.startDate.toString());
    vac.append("endDate", newVacation.endDate.toString());
    vac.append("price", newVacation.price.toString());
    vac.append("image", (newVacation.image as unknown as FileList).item(0));
    axios
      .post("http://localhost:4000/api/v1/images/addVacation", vac)
      .then((response) => navigate("/"));
    travel.dispatch(addVacationAction(newVacation));
  };

  return (
    <div className="Add">
      <h2>Add New Vacation</h2>
      <form onSubmit={handleSubmit(addNewVacation)}>
        <TextField
          label="Destination"
          variant="outlined"
          required
          {...register("destination")}
        />
        <br /> <br />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={2}
          label="Description"
          required
          {...register("description")}
        />
        <br /> <br />
        <input
          required
          type="date"
          min="2017-04-20"
          {...register("startDate")}
        />
        <br /> <br />
        <input type="date" {...register("endDate")} />
        <br /> <br />
        <TextField
          label="Price"
          type="number"
          placeholder="$"
          required
          {...register("price", { valueAsNumber: true, min: 0, max: 10000 })}
        />
        {errors.price && (
          <div style={{ color: "red" }}>Limit Price is $10,000</div>
        )}
        <br /> <br />
        <Button variant="contained" component="label" {...register("image")}>
          Cover Image
          <input hidden accept="image/*" type="file" name="image" />
        </Button>
        <br />
        <br />
        <Button type="submit">Add Vacation</Button>
      </form>
    </div>
  );
}
export default AddVacation;
