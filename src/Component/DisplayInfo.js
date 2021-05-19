import React from 'react';


class DisplayInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ["tom", "Joe", "Ken"],
            email: ["abc@abc.com", "bcd@bcd.com", "cde@cde.com"],
            companyPhrase: ["CEO", "Senior", "Junior"],
            editUser: false,
        }
        // console.log('edit user =', this.state.editUser)
    }



    editUser = () => {
        this.setState({
            editUser: true,
        })


    }


    componentDidUpdate() {
        console.log(this.state.name)
    }



    render() {
        return (
            <div className="displayInfo">
                <ul>
                    {/* {this.state.name.map((name)=>{ return <li key={name}>{name}</li>})} */}
                    {/* {this.state.name.map((name,email,companyPhrase)=>{ return <li>{name}{email}{companyPhrase}</li>})} */}
                </ul>

                <p>Name:</p>
                <p>Email:</p>
                <p>Company Phrase:</p>
                <button onClick={this.editUser}>Edit user</button>
            </div>
        )
    }

}


export default DisplayInfo