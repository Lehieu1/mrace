import React, { useState } from 'react';

function Form(props) {
    const [Student, setStudent] = useState({
        name: '',
        age: ''
    })
    const HandleChangeName = e => {
        setStudent({
            name: e.target.value,
            age: Student.age
        })
    }
    const HandleChangeAge = e => {
        setStudent({
            name: Student.name,
            age: e.target.value
        })
    }
    const HandleSubmit = e => {
        e.preventDefault()
        props.Add(Student);
        setStudent({
            name: '',
            age: ''
        })
    }
    return (
        <div>
            <form type="submit" onSubmit={HandleSubmit}>
                <input type="text" placeholder="Nhap ten" value={Student.name} onChange={HandleChangeName} />
                <input type="number" placeholder="Nhap tuoi" value={Student.age} onChange={HandleChangeAge} />
                <input type="submit" value="ADD" onSubmit={HandleSubmit} />
            </form >
        </div>
    );
}

export default Form;