function PropsDemo(props) {
  console.log(props);
  return (
    <>
      <h1>Props Demo</h1>
      Name : {props["name"]} <br />
      Age : {props.age}
    </>
  );
}

export default PropsDemo;
