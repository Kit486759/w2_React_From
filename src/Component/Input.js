import React from 'react';

const Input = (props) => {

    return (
        <>
            {/* <div key={info.id} id={info.id} className="user">
                <p>Name: {info.name}</p>
                <p>Email: {info.email}</p>
                <p>Company Phrase: {info.companyPhrase}</p>
                <button >Edit user</button>
                <button >Delete user</button>
            </div> */}


            <label>{props.title}:</label>
            <input name={props.name} id={props.id} placeholder={props.placeholder} value={props.value}
                onChange={props.onChange}>
            </input>
        </>
    )
}





export default Input;

