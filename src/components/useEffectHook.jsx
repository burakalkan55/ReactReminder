import { useState, useEffect } from "react";

function UseEffectHook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1️⃣ Sayfa ilk açıldığında çalışır
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []); // DİKKAT: [] -> sadece bir kere çalışsın diye boş array veriyoruz

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useEffect Hook Example 🚀</h1>

      {data.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UseEffectHook;
