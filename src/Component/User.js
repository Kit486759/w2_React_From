import React from 'react';
import './style.css'

const User = (props) => {

    return (
        props.info.map((info) => {

            return <div key={info.id} id={info.id} className="user">
                <p>Name: {info.name}</p>
                <p>Email: {info.email}</p>
                <p>Company Phrase: {info.companyPhrase}</p>
                <button >Edit user</button>
                <button >Delete user</button>
            </div>




        })

    )


}
export default User

//  <button onClick={this.editUser}>Edit user</button>
//  <button onClick={this.editUser}>Delete user</button>