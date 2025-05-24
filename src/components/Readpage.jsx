import React, { useEffect, useState, Link } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Readpage = () => {
  const [studentdata, setStudentdata] = useState({});
  const { studentid } = useParams();
  const Navigate = useNavigate();
  const Goback = () => {
    Navigate("/");
  };
  useEffect(() => {
    fetch("http://localhost:8000/StudentLIST/" + studentid)
      .then((res) => res.json())
      .then((data) => setStudentdata(data))
      .catch((err) => alert("error fetching data", err.message));
  });
  return (
    <div className=" grid justify-center mt-8 ">
      <h1 className=" text-3xl font-bold mb-6"> student Info</h1>

      {studentdata && (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>ROOM</th>
                  <th>PHONE</th>
                  <th>PROGRAMME</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{studentdata.id}</th>
                  <td>{studentdata.name}</td>
                  <td>{studentdata.room}</td>
                  <td>{studentdata.phone}</td>
                  <td>{studentdata.programme}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <button onClick={Goback} className="btn btn-info mr-3 mt-3">
        Back
      </button>
    </div>
  );
};

export default Readpage;
