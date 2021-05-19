import React from 'react';
import User from './User';

export default class UserList extends React.Component {

    state = {
        user: [
            {
                id: 0,
                name: "Kit",
                email: "kit@google.com",
                companyPhrase: "Junior"
            },
            {
                id: 1,
                name: "Joe",
                email: "Joe@google.com",
                companyPhrase: "CEO"
            },
            {
                id: 2,
                name: "Tom",
                email: "Tom@google.com",
                companyPhrase: "Senior"
            }
        ]
    }


    render() {
        console.log(this.state)
        return (

            <>
                <div className="userList">
                    <User info={this.state.user} />
                </div>
            </>
        )
    }
}


// for (let user in this.state) {
//     console.log(this.state[user])
// }

