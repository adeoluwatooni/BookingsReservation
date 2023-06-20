import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";


const ReservationCard = ({ name, id }) => {

  const dispatch = useDispatch()

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(id))
        dispatch(addCustomer())
      }}
      className="reservation-card-container">{name}</div>
  )
}

export default ReservationCard;