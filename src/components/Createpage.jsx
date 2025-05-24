import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Createpage = () => {
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/StudentLIST", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentinfo),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })

      .catch((err) => alert("error occured", err.message));
    Navigate("/");
  };
  const [studentinfo, setStudentinfo] = useState({
    id: "",
    name: "",
    room: "",
    phone: "",
    programme: "",
  });

  const [validate, setValidate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentinfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className=" mt-5 grid justify-center">
      <h1 className=" text-3xl font-bold">Add new student</h1>

      <form onSubmit={handleSubmit}>
        <label
          htmlFor="id"
          className="input input-bordered flex items-center gap-2 mt-2"
        >
          ID:
          <input
            type="text"
            className="grow"
            name="id"
            value={studentinfo.id}
            onChange={handleChange}
            id="id"
            required
          />
        </label>
        {studentinfo.length === 0 && validate && (
          <p className=" text-sm text-red-700">please fill this field</p>
        )}

        <label
          htmlFor="name"
          className="input input-bordered flex items-center gap-2 mt-2"
        >
          Name:
          <input
            type="text"
            className="grow"
            id="name"
            value={studentinfo.name}
            onChange={handleChange}
            name="name"
            required
          />
        </label>
        {studentinfo.length === 0 && validate && (
          <p className=" text-sm text-red-700">please fill this field</p>
        )}
        <label
          htmlFor="room"
          className="input input-bordered flex items-center gap-2 mt-2"
        >
          Room:
          <input
            name="room"
            value={studentinfo.room}
            id="room"
            onChange={handleChange}
            type="text"
            required
            className="grow"
          />
        </label>
        {studentinfo.length === 0 && validate && (
          <p className=" text-sm text-red-700">please fill this field</p>
        )}
        <label
          htmlFor="phone"
          className="input input-bordered flex items-center gap-2 mt-2"
        >
          Phone:
          <input
            id="phone"
            name="phone"
            value={studentinfo.phone}
            onChange={handleChange}
            type="text"
            required
            className="grow"
          />
        </label>
        {studentinfo.length === 0 && validate && (
          <p className=" text-sm text-red-700">please fill this field</p>
        )}

        <label
          htmlFor="programme"
          className="input input-bordered flex items-center gap-2 mt-2"
        >
          Programme:
          <input
            name="programme"
            value={studentinfo.programme}
            id="programme"
            onChange={handleChange}
            type="text"
            required
            className="grow"
          />
        </label>
        {studentinfo.length === 0 && validate && (
          <p className=" text-sm text-red-700">please fill this field</p>
        )}
        <button type="submit" className="btn btn-info mr-3 mt-3">
          Save
        </button>
        <Link to="/" className="btn btn-success mt-3">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Createpage;
