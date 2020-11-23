import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NASAspaceappsPractice extends Component {
    render() {
        return (
            <div>
                <p>These links are the ones I made when I was practicing for the NASA Space APPS Challange
                which unfortunately we back-outed to.
                </p>
                <Link to="/nasaspaceappspractice/randomUser">RandomUser</Link><br />
                <Link to="/nasaspaceappspractice/nasa">NASA</Link><br />
                <Link to="/nasaspaceappspractice/chart">Chart</Link><br />
                <Link to="/nasaspaceappspractice/practice1">Practice1</Link><br />
                <Link to="/nasaspaceappspractice/countupanddown">Count Up and Down</Link>
            </div>
        )
    }
}

export default NASAspaceappsPractice;