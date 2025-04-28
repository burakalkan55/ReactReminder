import { useState } from "react";

function SnackbarExample() {
  const [isVisible, setIsVisible] = useState(false);

  const showSnackbar = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 saniye sonra gizle
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Snackbar Example 🚀</h1>

      <button onClick={showSnackbar} style={{ padding: "10px 20px" }}>
        Show Snackbar
      </button>

      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#323232",
            color: "white",
            padding: "16px 24px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          ✅ Operation Successful!
        </div>
      )}
    </div>
  );
}

export default SnackbarExample;
