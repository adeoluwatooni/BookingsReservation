import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodtocustomer } from "../features/customerSlice";


const CustomerCard = ({ id, name, food }) => {

  const dispatch = useDispatch()
  const [customerFoodInput, setCustomerFoodInput] = useState('')

  const addFoodToArray = () => {
    console.log('hello');
    dispatch(
      addFoodtocustomer({
        id,
        food: customerFoodInput,
      })
    )
  }

  return (
    <div className="customer-food-card-container">
      <p>{ name }</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{ food }</p>
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
          <button onClick={addFoodToArray} >Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;