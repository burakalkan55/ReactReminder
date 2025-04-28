import { useState } from "react";

function DarkModeExample() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        minHeight: "100vh",
        backgroundColor: isDark ? "#121212" : "#f0f0f0",
        color: isDark ? "white" : "black",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{isDark ? "Dark Mode 🌑" : "Light Mode ☀️"}</h1>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: isDark ? "#333" : "#ddd",
          color: isDark ? "white" : "black",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default DarkModeExample;
