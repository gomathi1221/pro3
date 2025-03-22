import React from "react";

function NumberList({ data }) {
  return (
    <div className="data-container">
      <h3>Previous State:</h3>
      <p>{JSON.stringify(data.windowPrevState)}</p>

      <h3>Current State:</h3>
      <p>{JSON.stringify(data.windowCurrState)}</p>

      <h3>Fetched Numbers:</h3>
      <ul>
        {data.numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h3>Average: {data.avg}</h3>
    </div>
  );
}

export default NumberList;
