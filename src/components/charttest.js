import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'

const Dragon = props => {
return <div>Wakanda is {props.name}'s kingdom. </div>
}

class Chartex extends Component{
    state = {
        chartData:{
            labels: ["Manila", "Quezon", "Paranaque"],
            datasets: [{
                label:'Population',
                data:[
                    9199,
                    13633,
                    2268
                ],
                backgroundColor:[
                    'rgba(255,100,50,0.6)',
                    'rgba(20,100,255,0.6)',
                    'rgba(125,255,50,0.6)'
                ]
            }]
        }
    }

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
                <Dragon name="Jim"/>
                <Dragon name="Bet"/>
                <Dragon name="Ang"/>
            </div>
        );
    }
}

export default Chartex;