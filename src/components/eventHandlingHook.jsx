import { useState } from "react";

function EventHandlingHook() {
  const [text, setText] = useState("");

  const handleClick = () => {
    alert("Button Clicked! 🚀");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Event Handling Example 🚀</h1>

      {/* Butona tıklayınca alert çıkar */}
      <button onClick={handleClick}>Click Me!</button>

      {/* Input'a yazdıkça state güncellenir */}
      <div style={{ marginTop: "30px" }}>
        <input 
          type="text" 
          placeholder="Type something..." 
          onChange={handleChange}
          value={text}
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
}

export default EventHandlingHook;
