import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ListComponent() {
  let cars = ["BMW", "Volvo", "Saab", "Ford"];

  //   cars = [];

  return (
    <>
      {/* static content */}
      {/* <h2>List</h2>
      <ul className="list-group">
        <li
          className="list-group-item"
          style={{ color: "#a0b000", backgroundColor: "black" }}
        >
          Item 1
        </li>
        <li className="mystyles">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul> */}

      <h2>Dynamic List</h2>

      {cars.length === 0 ? (
        <h2>No cars available</h2>
      ) : (
        <ul className="list-group">
          {cars.map((car, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => alert(car + "      " + index)}
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
