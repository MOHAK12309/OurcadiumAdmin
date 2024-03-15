import React, { useEffect, useState } from "react";

import axios from "axios";

function Admin() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const [data, setData] = useState([]);
  const GetData = async () => {
    try {
      const res = await axios.get(
        "https://server.youthbuzz.in/api/v1/session/get"
      );
      console.log(res.data.Data.session);
      setData(res.data.Data.session);
    } catch (erroe) {}
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <table border="1" bgcolor="#0D4F74"cellSpacing="5px" style={{margin:"auto"}}>
        <tr>
          <th>Sno.</th>
          <th>Session no.</th>

          <th>Date</th>
          <th>Duration</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Location</th>
          <th>Total players</th>
          
        </tr>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{item.Date}</td>
              <td>{item.Duration}</td>
              <td>{item.StartTime}</td>
              <td>{item.EndTime}</td>
              <td>{item.Location}</td>
              <td>{item.TotalPlayers}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Admin;
