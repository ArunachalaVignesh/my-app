import React, { useState, useEffect } from 'react';
import './Home.css';
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
    const [students,setstudent]=useState([]);
    useEffect(() => {
        //setstudent(mockStudents) 
        getStudents()
    },[]);
    function getStudents() {
        fetch("https://financier.onrender.com/students")
        .then((response) => response.json())
        .then((data) => setstudent(data));
    }
    function handleClick() {
        history.push("/Create");
    }

    function handleDelete(student) {
        fetch('https://financier.onrender.com/students', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'_id':student._id})
        })
            .then(res => res.json())
            .then(res => getStudents());
    } function handleEdit(student) {
        history.push("/Edit/"+student._id);
        
    }

    const mockStudents = [
        {
            id: 1,
            name: 'vinay',
            fatherName: 'malai',
            qualification: 'BE',
            mobile: '9999999999',
            email: 'inay@gmail.com',
            address: 'trichy',
            status: 'active'

        }, {
            id: 2,
            name: 'siva',
            fatherName: 'malai',
            qualification: 'BE',
            mobile: '9999999999',
            email: 'inay@gmail.com',
            address: 'trichy',
            status: 'active'

        }, {
            id: 3,
            name: 'ajith',
            fatherName: 'malai',
            qualification: 'BE',
            mobile: '9999999999',
            email: 'inay@gmail.com',
            address: 'trichy',
            status: 'active'

        }]
    return (
        <div className="container">
            <button className='CreateButton' onClick={handleClick}>Create student</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Qualification</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return (<tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.fatherName}</td>
                            <td>{student.qualification}</td>
                            <td>{student.mobile}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>
                                <button class="btn" onClick={() => handleEdit(student)}>Edit</button>
                                <button class="btn" onClick={() => handleDelete(student)}>Delete</button >
                            </td>
                        </tr>)

                    })}
                </tbody>
            </table>
        </div >
    )
}
export default Home;
