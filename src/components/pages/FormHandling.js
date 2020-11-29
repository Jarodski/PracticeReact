import React, { Component } from 'react'

class FormHandling extends Component {
    state = {
        username: "",
        password: ""

    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <label>Username: </label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.onChangeUsername} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FormHandling;