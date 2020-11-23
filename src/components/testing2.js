import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class NasaSat extends Component{
  state = {
    loading: true,
    satalite: null,
  };

  async componentDidMount(){
    const url = "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=1.50&api_key=DEMO_KEY";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({satalite: data, loading: false})
  };

  render (){
    return (
      <div>
        {this.state.loading || !this.state.satalite ? 
        (<div>loading...</div>) : 
        (<div>
          <img src= {this.state.satalite.url}/>
          </div>
          )
        }
      </div>
    )
  };

}

export default NasaSat;
