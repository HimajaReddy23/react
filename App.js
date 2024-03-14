import React from 'react';

function App() {
  let empObj = { empno: 10256, ename: "Scott", job: "Manager", deptno: 10 };

  return (
    <>
      

      <table border={2} width={20}>
        <thead>
          
        </thead>
        <tbody>
          <tr>
            <td>Employee Id</td>
            <td>{empObj.empno}</td>
          </tr>
          <tr>
            <td>Employee Name</td>
            <td>{empObj.ename}</td>
          </tr>
          <tr>
            <td>Employee Job</td>
            <td>{empObj.job}</td>
          </tr>
          <tr>
            <td>Employee Deptno</td>
            <td>{empObj.deptno}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
