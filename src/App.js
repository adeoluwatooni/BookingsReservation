import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ReservationCard from "./components/reservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/customerCard";


function App() {

  const reservations = useSelector(
    (state) => state.reservations.value
  )

  const customers = useSelector(
    (state) => state.customers.value
  )

  const [reservationName, setreservationName] = useState('')

  const dispatch = useDispatch()

  const handleAddReservation = () => {
    dispatch(addReservation(reservationName))
    setreservationName('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, id) => {
                return <ReservationCard name={name} key={id} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e)=> setreservationName(e.target.value)} />
            <button onClick={handleAddReservation} >Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map( (customer, id) => {
            return <CustomerCard key={id} id={customer.id} name={customer.name} food={customer.food}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;