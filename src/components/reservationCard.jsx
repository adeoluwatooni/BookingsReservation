import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from 'uuid'


const ReservationCard = ({ name, id }) => {

  const dispatch = useDispatch()

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(id))
        dispatch(addCustomer({
          id: uuid,
          name,
          food: []
        }))
      }}
      className="reservation-card-container">{name}</div>
  )
}

export default ReservationCard;