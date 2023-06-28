import { Route, Routes, Navigate } from "react-router-dom";
import Add from "../../Pages/AddVacation/AddVacation";
import Page404 from "../../Pages/Page404/Page404";
import Edit from "../../Pages/Edit/Edit";
import VacationsPage from "../../Pages/VacationsPage/VacationsPage";
import SignIn from "../../Pages/Login/SignIn";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/TravelApp";
import TinyBarChart from "../../Pages/Reports/TinyBarChart";
import SignUp from "../../Pages/Register/SignUp";

function MainRoute(): JSX.Element {
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );
  const status: string | undefined = currentUser?.role;
  return (
    <div className="MainRoute">
      <Routes>
        {status === "admin" && (
          <>
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/reports" element={<TinyBarChart />} />
          </>
        )}

        {status && <Route path="/" element={<VacationsPage />} />}

        <Route
          path="/login"
          element={!status ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!status ? <SignUp /> : <Navigate to="/" />}
        />

        <Route
          path="*"
          element={!status ? <Navigate to="/login" replace /> : <Page404 />}
        />
      </Routes>
    </div>
  );
}

export default MainRoute;
