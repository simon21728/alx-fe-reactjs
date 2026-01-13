import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#eef2f7",
        minHeight: "300px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#222" }}>
        User Profiles
      </h2>

      <UserProfile
        name="Sewmehon Bayu"
        age={22}
        bio="Electrical & Computer Engineering Student"
      />
    </main>
  );
}

export default MainContent;
