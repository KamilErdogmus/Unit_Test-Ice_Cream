import React from "react";

const Card = ({ i, addToBasket, removeFromBasket, amount }) => {
  return (
    <div
      style={{ width: "200px" }}
      className="border rounded p-3 d-flex flex-column  bg-dark bg-opacity-75 align-items-center gap-1"
    >
      <img src={i.imagePath} alt="imagee" height={100} />
      <span>{i.name}</span>

      <div
        className={`d-flex align-items-center ${
          amount === 0 ? " gap-2 flex" : ""
        } justify-content-center mt-4 gap-2`}
      >
        <button
          disabled={amount === 0}
          onClick={() => removeFromBasket(i.id)}
          className={`btn btn-sm  btn-outline-danger ${
            amount === 0 ? "visually-hidden" : ""
          }`}
        >
          {amount === 1 ? "Remove" : "Reduce"}
        </button>
        <span data-testid="amount" className="fs-2">
          {amount}
        </span>
        <button
          onClick={() => addToBasket(i)}
          className="btn btn-sm  btn-outline-success"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
