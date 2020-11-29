import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/countries">Countries</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/formhandling">FormHandling</Link>
                    </li>
                    <li>
                        <Link to="/nasaspaceappspractice">NASA-Practice</Link>
                    </li>
                    <li>
                        <Link to="/external-link-stackoverflow">External-Link</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;