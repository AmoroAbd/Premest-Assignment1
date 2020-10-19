import React from "react";

function Table(props) {
  return (
    <div>
      <div className="table">
        <table className="table" border="1">
          <tr>
            {" "}
            <th> Contact Person</th> <th>Email</th> <th>Phone</th>{" "}
            <th>Department</th>
          </tr>
          <tr>
            <td>Lorem ipsum.</td> <td> Lorem@yahoo.com</td>
            <td>233274565721</td> <td>Adminstrative</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td> <td> dolor@yahoo.com</td>
            <td>233241654217</td> <td>Programs</td>
          </tr>
          <tr>
            <td>Ipsum dolor.</td> <td> Ipsum@yahoo.com</td>
            <td>233247452217</td> <td>Marketing</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td> <td> Lorem@yahoo.com</td>
            <td>233246987513</td> <td>IT</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Table;
