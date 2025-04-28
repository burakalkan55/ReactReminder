import NumberData from "./numberPropsData";

function PropsFromAnotherFile(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Props From Another File 🚀</h1>
      <h2>The number is:</h2>
      {props.Component}
    </div>
  );
}

function PropsWrapper() {
  return <PropsFromAnotherFile Component={<NumberData />} />;
}

export default PropsWrapper;
