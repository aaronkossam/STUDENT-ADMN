import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Studentdashboard = () => {
  const { studentid } = useParams();
  const [studentdata, setStudentdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/StudentLIST")
      .then((res) => res.json())
      .then((data) => setStudentdata(data))
      .catch((err) => alert("error fetching data" + err.messsage));
  }, []);
  const Navigate = useNavigate();

  const ViewDetails = (id) => {
    Navigate("/Studentdashboard/Readpage/" + id);
  };
  const DeleteDetails = (id) => {
    fetch("http://localhost:8000/StudentLIST/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (res) => console.log(res),
        setStudentdata((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((err) => alert("not deleted ", err.messsage));
  };
  const EditDetails = (id) => {
    Navigate("/Studentdashboard/Editpage/" + id);
  };
  return (
    <div className=" grid justify-center mt-4">
      <h1 className=" text-3xl">Elizabeth sey Hall Student Dashboard</h1>
      <Link
        to="/Studentdashboard/createpage/"
        className="btn btn-primary mr-96 mt-4"
      >
        Add New Students
      </Link>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL NO</th>
              <th>Name</th>
              <th>ROOM </th>
              <th>PHONE</th>
              <th>PROGRAMME</th>

              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {studentdata.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.room}</td>
                <td>{item.phone}</td>
                <td>{item.programme}</td>

                <td className="flex gap-2">
                  <button
                    onClick={() => ViewDetails(item.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                  <button
                    onClick={() => EditDetails(item.id)}
                    className="btn btn-success"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => DeleteDetails(item.id)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentdashboard;
