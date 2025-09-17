function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return (
    <>
      <button onClick={() => shoot("Good shot")}>
        Click here to fire the event
      </button>
    </>
  );
}

export default Football;
