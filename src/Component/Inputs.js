import React from 'react';
import Input from './Input';

class Inputs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [
                {
                    id: "",
                    name: "",
                    email: "",
                    companyPhrase: ""

                }
            ]
        }
    }

    changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            user: [{
                [name]: value
            }
            ]

        })
    }

    submitInfo = (e) => {
        e.preventDefault()
        alert(this.state.name + this.state.email + this.state.company)

        let display = document.getElementsByClassName("displayInfo")[0]
        let ul = display.getElementsByTagName("ul")[0]
        ul.innerHTML += (`<li>
        Name: ${this.state.name}
        <br>
         Email: ${this.state.email}  
          <br>
          Company Phrase: ${this.state.companyPharse}
        </li>
        `)
    }

    componentDidUpdate() {
        console.log(this.state.user[0].name, this.state.user[0].email, this.state.user[0].companyPharse)
    }

    render() {
        return (
            <form onSubmit={this.submitInfo}>
                <div className="inputBoxes">
                    {/* <label>Name:</label> */}
                    {/* <input name="name" id="inputName" placeholder="Input Name" value={this.state.name}
                        onChange={this.changeHandler}>
                    </input> */}

                    <Input title="Name" name="name" id="inputName" placeholder="Input Name" value={this.state.name} onChange={this.changeHandler} />
                    <br />

                    <Input title="Email" name="email" id="inputEmail" placeholder="Input Email" value={this.state.email} onChange={this.changeHandler} />
                    <br />

                    <Input title="Company Phrase" name="company" id="inputCompanyPhrase" placeholder="Input Company Phrase" value={this.state.companyPharse} onChange={this.changeHandler} />


                    <br />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }

}

export default Inputs