import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        color: "white",
        margin: "10% 0",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "900" }}>
        Hiçbir şey bulunamadı!
      </h1>
      <p style={{ fontSize: "1rem" }}>Her şeyi iki kez kontrol edin, lütfen</p>
    </div>
  );
};

export default NotFoundPage;
