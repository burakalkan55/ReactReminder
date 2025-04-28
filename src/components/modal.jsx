import { useState } from "react";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Modal Example 🚀</h1>

      <button onClick={openModal} style={{ padding: "10px 20px" }}>
        Open Modal
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              minWidth: "300px",
              textAlign: "center",
            }}
          >
            <h2>Hello Modal! 🎯</h2>
            <p>This is a simple modal window.</p>

            <button onClick={closeModal} style={{ marginTop: "20px" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
