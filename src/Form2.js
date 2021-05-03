import React from "react";

function Form2() {
  return (
    <div className="form-container">
      <div className="assign-btn-container">
        <button className="assign-btn assign-btn-active">Section 1</button>
        <button className="assign-btn">Section 2</button>
      </div>
      <div className="drop-down-container">
        <select className="drop-down">
          <option>lorem ipsn</option>
        </select>
        <select className="drop-down">
          <option>lorem ipsn</option>
        </select>
      </div>
      <div className="questions-assign-container">
        <div className="question-assign">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <h4>Lorem Ipsum</h4>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus?
          </p>
        </div>
        <div className="question-assign">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <h4>Lorem Ipsum</h4>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus?
          </p>
        </div>
        <div className="question-assign">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <h4>Lorem Ipsum</h4>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            delectus?
          </p>
        </div>
      </div>
      <button className="next-btn">SHARE</button>
    </div>
  );
}

export default Form2;
