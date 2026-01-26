import { useState, useEffect } from "react";

function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/about/")
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {aboutData.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          {/* PDF Download / Open Link */}
          {item.pdf && (
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 15px",
                backgroundColor: "#007BFF",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Download PDF
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default About;
