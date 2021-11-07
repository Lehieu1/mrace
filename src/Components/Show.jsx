import React from 'react';

function Show(props) {

    return (
        <div style={{
            marginTop: '50px'
        }}>
            <h2>Ho ten:{props.student.name}</h2>
            <h2>Tuoi: {props.student.age}</h2>
        </div>
    );
}

export default Show;