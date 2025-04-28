import { useState } from "react";

function ConditionalRenderingHook() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering Example 🚀</h1>

      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {/* Ternary Operator ile gösterme/gizleme */}
      {isVisible ? (
        <p style={{ marginTop: "20px" }}>This is a visible text. 👀</p>
      ) : (
        <p style={{ marginTop: "20px" }}>The text is hidden. 🙈</p>
      )}
    </div>
  );
}

export default ConditionalRenderingHook;
