import React from 'react'

function Botonmenos(props) {

    return (
        <div>
            <button onClick={props.decrement}>Decrementar</button>
        </div>
    )
}

export default Botonmenos;