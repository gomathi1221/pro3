import React, { useState, useEffect } from "react";
import NumberList from "./components/NumberList";
import "./components/style.css";  // Ensure styles.css is in `src/`


function App() {
  const [numberType, setNumberType] = useState("p");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`http://localhost:9876/numbers/${numberType}`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [numberType]);

  return (
    <div className="container">
      <h1>Average Calculator</h1>

      <div className="button-group">
        <button onClick={() => setNumberType("p")}>Prime</button>
        <button onClick={() => setNumberType("f")}>Fibonacci</button>
        <button onClick={() => setNumberType("e")}>Even</button>
        <button onClick={() => setNumberType("r")}>Random</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data && <NumberList data={data} />}
    </div>
  );
}

export default App;



