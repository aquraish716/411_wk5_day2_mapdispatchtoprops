import React from 'react'

const Total = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            {props.cars.length}
            <h1>4</h1>
        </div>
    )
}

export default Total