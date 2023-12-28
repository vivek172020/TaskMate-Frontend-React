import React from 'react'

export default function Country(props) {



    return (
        <>
            <div className='country-box'>
                <div className="country-content">
                    <h2>{props.number}+</h2>
                    <p>{props.name}</p>
                </div>
            </div>
        </>
    )
}
