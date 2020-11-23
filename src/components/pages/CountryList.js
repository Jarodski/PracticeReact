import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component {
    state = {
        countries: null,
        loading: true,
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => this.setState({ countries: data, loading: false }))
    }
    myHandler = (e) => {
        alert("Pervert.")
    }
    render() {
        console.log("awit")
        console.log(this.state.countries)
        console.log(this.state.loading)
        return (
            <div id="customers">
                <button onClick={this.myHandler}>Touch me!</button>
                {this.state.loading || !this.state.countries ? (<div>Loading...</div>) :
                    (
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Capital</th>
                                    <th>Population</th>
                                    <th>Density</th>
                                    <th>Land Area</th>
                                    <th>Actions</th>
                                </tr>
                                {this.state.countries.map(country => (
                                    <tr>
                                        <td>{country.name}</td>
                                        <td>{country.capital}</td>
                                        <td>{country.population}</td>
                                        <td>{country.population && country.area ? ((country.population / country.area).toFixed(2)) : ("")}</td>
                                        <td>{country.area}</td>
                                        <td>
                                            <Link
                                                to={{
                                                    pathname: `/countries/${country.alpha3Code}`,
                                                    state: { country: country },
                                                }}
                                            >
                                                Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }

            </div>
        )
    }
}

export default CountryList;