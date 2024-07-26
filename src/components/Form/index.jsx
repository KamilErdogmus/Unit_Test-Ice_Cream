import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <form className="mb-5 d-flex justify-content-end me-3 align-items-center gap-2">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        type="checkbox"
        name="terms"
        className="form-check-input"
        id="terms"
      />

      <div className="wrapper mt-1 ">
        <p style={{ visibility: isHover ? "visible" : "hidden" }}>
          We won't deliver anything to you
        </p>
        <label htmlFor="terms">I have read and accept the terms of use</label>
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          disabled={!isChecked}
          className="btn btn-primary"
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default Form;
