import { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services/")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Services</h1>
      <ul>
        {services.length > 0 ? (
          services.map((s) => <li key={s.id}>{s.name}</li>)
        ) : (
          <li>Loading services...</li>
        )}
      </ul>
    </div>
  );
}

export default Services;
