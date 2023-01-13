import React, { useState, useEffect } from 'react';
import './Create.css';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Create() {
    const [student, setstudent] = useState({
        name: '',
        fatherName: '',
        qualification: '',
        mobile: '',
        email: '',
        address: '',
        status: 'active'
    });
    const [isEditmode, setIsEditMode] = useState(false)
    let history = useHistory();
    let { id } = useParams();
    useEffect(() => {
        //setstudent(mockStudents) 
        if (id) { getStudents(id); setIsEditMode(true) }
    }, [id]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVictory, setIsVictory] = useState(false);
    function handleChange(value, name) {
        console.log(value, name)
        let tempstudent = { ...student };
        tempstudent[name] = value;
        setstudent({ ...tempstudent })
        console.log(student)
    }
    function getStudents(id) {
        if (id) {
            fetch("https://financier.onrender.com/students")
            .then((response) => response.json())
            .then((data) => {
                let tempStud = [...data]
                let editStud = tempStud.filter(students => students._id == id);
                setstudent(editStud[0]);
            })
        }
    }

    function handleClick() {
        history.push("/Home");
    }
    function handleSubmit() {
        if (isEditmode) {
            let tmpStudent = { ...student };
            tmpStudent._id = id;
            fetch('https://financier.onrender.com/students', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json ',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tmpStudent)
            })
                .then(res => res.json())
                .then(res => setIsVictory('True'));
        }
        else {

            fetch('https://financier.onrender.com/students', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json ',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            })
                .then(res => res.json())
                .then(res => setIsSuccess('True'));
        }
    }
    return (
        <div className="container">
            <button classname='ViewallStudentsButton' onClick={handleClick}>
                View All Students
            </button>
            <form>
                <label for="uname"><b>NAME</b></label>
                <input type="text" placeholder="Your Name" name="name" required value={student.name} onChange={e => handleChange(e.target.value, e.target.name)} />
                <label for="lname"><b>Last Name</b></label>
                <input type="text" placeholder="Your Last Name" name="fatherName" required value={student.fatherName} onChange={e => handleChange(e.target.value, e.target.name)} />
                <label for="qlify"><b>Qualification</b></label>
                <input type="text" placeholder="Your Qualification" name="qualification" required value={student.qualification} onChange={e => handleChange(e.target.value, e.target.name)} />
                <label for="Mobile"><b>Mobile Number</b></label>
                <input type="text" placeholder="Enter your Mobile Number" name="mobile" size="10" required value={student.mobile} onChange={e => handleChange(e.target.value, e.target.name)} />
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required value={student.email} onChange={e => handleChange(e.target.value, e.target.name)}></input>
                <label for="address"><b>ADDRESS</b></label>
                <textarea id="address" name="address" placeholder="Your Address" style={{ height: '100px' }} required value={student.address} onChange={e => handleChange(e.target.value, e.target.name)}></textarea>
                <input type="button" onClick={() => handleSubmit()} value="Submit"></input>
                {isSuccess && <p>Student successfully created</p>}
                {isVictory && <p>Student successfully edited</p>}
            </form>
        </div>

    )
} export default Create;