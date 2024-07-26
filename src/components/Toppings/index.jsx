import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setdata] = useState([]);
  const [basket, setbasket] = useState([]);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setbasket([...basket, item])
      : setbasket(basket.filter((i) => i.name !== item.name));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3013/toppings")
      .then((res) => setdata(res.data));
  }, []);
  return (
    <div>
      <div className="bg-dark fit p-4 border m-auto rounded">
        <h3>Toppings</h3>
        <p>
          Per Topping Price:
          <span className="text-success"> $1.5</span>
        </p>
        <h3>
          Total Topping Price:
          <span className="text-success">$</span>
          <span data-testid="total" className="text-success">
            {basket.length * 1.5}
          </span>
        </h3>
      </div>
      <div className="row mt-4 gap-4 ">
        {data.map((item) => (
          <div className="col top-card bg-dark bg-opacity-75" key={item.id}>
            <label htmlFor={item.name}>
              <img src={item.imagePath} alt="topping-image" height={100} />
              <p className="text-center ">{item.name}</p>
            </label>
            <input
              onChange={(e) => handleChange(e.target.checked, item)}
              type="checkbox"
              id={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
