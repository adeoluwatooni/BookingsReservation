import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ReservationCard from "./components/reservationCard";
import { addReservation } from "./features/reservationSlice";


function App() {

  const reservations = useSelector(
    (state) => state.reservations.value
  )

  const [reservationName, setreservationName] = useState('')

  const dispatch = useDispatch()
  
  const handleAddReservation = () => {
    dispatch(addReservation(reservationName))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name) => {
                return <ReservationCard name={name} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e)=> setreservationName(e.target.value)} />
            <button onClick={handleAddReservation} >Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;