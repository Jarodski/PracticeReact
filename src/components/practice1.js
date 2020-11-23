import React, { Component } from 'react'

const Identitycard = props => {
    return <div>
        Name: {props.name}<br />
        Age: {props.age}<br />
        Gender: {props.gender}<br />
        Height: {props.height}<br />
        Weight: {props.weight}<br />
    </div>
}

class Practice1 extends Component {
    render() {
        return (
            <div>
                <Identitycard name='Jarod' age='20' gender='Male' height='174' weight='60' />
            </div>
        );
    }
}

export default Practice1;