import { useDispatch } from "react-redux";


const ReservationCard = ({ name }) => {

  const dispatch = useDispatch()
  
  return (
    <div className="reservation-card-container">{ name }</div>
  )
}

export default ReservationCard;