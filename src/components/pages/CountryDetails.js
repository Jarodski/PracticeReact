import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CountryDetails extends Component {
    render() {
        console.log("wits")
        console.log(this.props.location.state.country)
        const { country } = this.props.location.state
        return (
            <div>
                <img src={country.flag} alt={"flag_of" + country.name} />
                <h3>{country.name}</h3>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Density: {(country.population / country.area).toFixed(2)}</p>
                <p>Land Area: {country.area}</p>
                <Link to="/countries">Back</Link>
            </div >
        )
    }
}

export default withRouter(CountryDetails);