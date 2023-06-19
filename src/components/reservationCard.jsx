import { useDispatch } from "react-redux";


const dispatch = useDispatch

const ReservationCard = ({ name }) => {
  return (
    <div className="reservation-card-container">{ name }</div>
  )
}

export default ReservationCard;