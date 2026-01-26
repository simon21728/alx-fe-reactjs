import { useState, useEffect } from "react";

function Home() {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/home/")
      .then(res => res.json())
      .then(data => setHomeData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {homeData.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
           {/* Display Image from Django */}
          {item.image && (
            <img
              src={item.image}
              alt="Home"
              style={{ width: "100%", maxWidth: "500px", marginTop: "15px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
