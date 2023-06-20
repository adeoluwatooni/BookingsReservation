

const CustomerCard = ({id, name, food}) => {
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
          <input />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;