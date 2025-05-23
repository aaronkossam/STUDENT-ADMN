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

  const ViewDetails = () => {
    Navigate("/Studentdashboard/Readpage/studentid" + studentid);
  };
  return (
    <div className=" grid justify-center mt-4">
      <h1 className=" text-3xl">Student Dashboard</h1>
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
              <th>PLACE</th>
              <th>PHONE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {studentdata.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>{item.phone}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => ViewDetails(item.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-warning">Delete</button>
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
