import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ListComponent() {
  let cars = ["BMW", "Volvo", "Saab", "Ford"];

  //   cars = [];

  const handleClick = (e) => {
    alert("Clicked " + e.target.name + " " + e.target.innerText);
  };

  return (
    <>
      <h2>Dynamic List</h2>

      {cars.length === 0 ? (
        <h2>No cars available</h2>
      ) : (
        <ul className="list-group">
          {cars.map((car) => (
            <li
              key={car}
              className="list-group-item"
              // onClick={() => alert(car + "      " + index)}
              onClick={handleClick()}
            >
              {car}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListComponent;
