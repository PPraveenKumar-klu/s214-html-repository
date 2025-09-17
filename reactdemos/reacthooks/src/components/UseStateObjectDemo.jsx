import React from "react";
import { useState } from "react";

const UseStateObjectDemo = () => {
  const [student, setStudent] = useState({
    name: "",
    registerno: "",
    branch: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStudent({ ...student, [name]: value });
    console.log(name, value);
  };
  return (
    <>
      <div>UseStateObjectDemo</div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={student.name}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerno">Register No</label>
            <input
              type="number"
              name="registerno"
              id="registerno"
              className="form-control"
              value={student.registerno}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              name="branch"
              id="branch"
              className="form-control"
              value={student.branch}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary my-2"
            onClick={() => alert(JSON.stringify(student))}
          >
            Display Values
          </button>
        </form>
        Name :{student.name} <br />
        Register No :{student.registerno} <br />
        Branch :{student.branch} <br />
      </div>
    </>
  );
};

export default UseStateObjectDemo;
