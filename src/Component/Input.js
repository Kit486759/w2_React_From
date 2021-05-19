import React from 'react';

const Input = (props) => {

    return (
        <>
            <label>{props.title}:</label>
            <input name={props.name} id={props.id} placeholder={props.placeholder} value={props.value}
                onChange={props.onChange}>
            </input>
        </>
    )
}





export default Input;

