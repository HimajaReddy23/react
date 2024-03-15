import React, { useState } from 'react';

function EmployeeCRUD() {
    const [employees, setEmployees] = useState([]);

    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getEmployeesButton_click() {
        let tempArray = [
            { empno: 101, ename: "John Doe", job: "Manager", sal: 50000, deptno: 10 },
            { empno: 102, ename: "Jane Smith", job: "Developer", sal: 40000, deptno: 20 },
            { empno: 103, ename: "Robert Johnson", job: "Analyst", sal: 35000, deptno: 30 },
            { empno: 104, ename: "Emily Davis", job: "Designer", sal: 45000, deptno: 20 },
        ];

        setEmployees(tempArray);
    }

    function addEmployeeButton_click() {
        let employee = { empno: empno, ename: ename, job: job, sal: sal, deptno: deptno };
        setEmployees([...employees, employee]);
        clearFields();
    }

    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }

    function deleteEmployee_click(empno) {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            setEmployees(employees.filter(emp => emp.empno !== empno));
        }
    }

    function selectEmployee_click(empno) {
        let employee = employees.find(emp => emp.empno === empno);
        setEmpno(employee.empno);
        setEname(employee.ename);
        setJob(employee.job);
        setSal(employee.sal);
        setDeptno(employee.deptno);
    }

    function updateEmployeeButton_click() {
        let updatedEmployees = employees.map(emp => {
            if (emp.empno === empno) {
                return { empno: empno, ename: ename, job: job, sal: sal, deptno: deptno };
            } else {
                return emp;
            }
        });
        setEmployees(updatedEmployees);
        clearFields();
    }

    let resultArray = employees.map((emp, index) => {
        return (
            <tr key={index}>
                <td>{emp.empno}</td>
                <td>{emp.ename}</td>
                <td>{emp.job}</td>
                <td>{emp.sal}</td>
                <td>{emp.deptno}</td>
                <td>
                    <a onClick={() => selectEmployee_click(emp.empno)} href="javascript:void(0);">Select</a> |
                    <a onClick={() => deleteEmployee_click(emp.empno)} href="javascript:void(0);">Delete</a>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h3>CRUD Operations on Employee Data</h3>
            <hr />
            <input type="text" placeholder="Employee Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
            <input type="text" placeholder="Employee Name" value={ename} onChange={(e) => setEname(e.target.value)} />
            <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
            <input type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
            <input type="text" placeholder="Department Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
            <hr />
            <input type="button" onClick={getEmployeesButton_click} value="Get Employees" />
            <input type="button" onClick={addEmployeeButton_click} value="Add Employee" />
            <input type="button" onClick={updateEmployeeButton_click} value="Update Employee" />
            <hr />
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Employee Number</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Department Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {resultArray}
                </tbody>
            </table>
        </>
    );
}

export default EmployeeCRUD;
