import { useForm } from "react-hook-form";

function ReactHookFormExample() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Formu temizler
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hook Form Example 🚀</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "20px" }}>
          <input
            {...register("firstName")}
            placeholder="First Name"
            style={{ padding: "10px", width: "200px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            style={{ padding: "10px", width: "200px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactHookFormExample;
