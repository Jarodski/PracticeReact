import React, { Component } from 'react';

class CountUpAndDown extends Component {
    state = {
        count: 0
    }
    countUp() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
    }
    countDown = (e) => {
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log(this.state.count)
        })
    }
    countUpLateLog() {//The console log is being called before the state is changed
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    countDownLateLog = (e) => {
        this.setState({
            count: this.state.count - 1
        })

        console.log(this.state.count)
    }
    countUp5xFailed() {
        this.countUp()
        this.countUp()
        this.countUp()
        this.countUp()
        this.countUp()
    }
    countDown5xFailed = (e) => {
        this.countDown()
        this.countDown()
        this.countDown()
        this.countDown()
        this.countDown()
    }

    countUpBasedOnPrev() {
        //Update State Based on the Previous state, 
        //use a function instead of the reguular object
        //this,setState((<The previous state>, <props>))
        //The first parameter is the previous state, the second is props
        //props is actually not used here, but i put it there just for example
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count)
        })
    }
    countDownBasedOnPrev = (e) => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }), () => {
            console.log(this.state.count)
        })
    }

    countUp5x() {
        this.countUpBasedOnPrev()
        this.countUpBasedOnPrev()
        this.countUpBasedOnPrev()
        this.countUpBasedOnPrev()
        this.countUpBasedOnPrev()
    }
    countDown5x = (e) => {
        this.countDownBasedOnPrev()
        this.countDownBasedOnPrev()
        this.countDownBasedOnPrev()
        this.countDownBasedOnPrev()
        this.countDownBasedOnPrev()
    }

    resetCount = (e) => {
        this.setState({
            count: 0
        }, () => {
            console.log(this.state.count)
        })
    }
    render() {
        return (
            <div>
                <h2>setState() Function</h2>
                <p>Always make use of setState and never modify the state directly.</p>
                <p>
                    Code has to be executed after the state has been updated.
                    Place that code in the call back function which is the second argument to the
                    setState method.
                </p>
                <p>
                    When you have to update state based on the previousu state value, pass in a function as an
                    argument instead of the regular object.
                </p>
                <br />
                <p>The counter: </p>
                <h1 style={{ textAlign: 'center', color: 'green' }}>{this.state.count}</h1>
                <div style={{ textAlign: 'center' }} onClick={this.resetCount}>
                    <button>Reset</button>
                </div>


                <h3>Increment the number while logging it</h3>
                <p>Update state, but the console logs the previous state. This is wrong.</p>
                <button onClick={() => this.countUpLateLog()}>Count Up Late Log</button>
                <button onClick={this.countDownLateLog}>Count Down Late Log</button>
                <br /> <br />
                <p>Update state while logging the current state:</p>
                <button onClick={() => this.countUp()}>Count Up</button>
                <button onClick={this.countDown}>Count Down</button>
                <br /> <br />

                <h3>Increment the number 5x</h3>
                <p>This should have incremented 5x, but it doesn't. All it does is console log the incremented value 5 times. This is wrong.</p>
                <button onClick={() => this.countUp5xFailed()}>Count Up 5x Failed</button>
                <button onClick={this.countDown5xFailed}>Count Down 5x Failed</button>
                <br /><br />
                <p>This increments 5x. The solution is pass a function as an argument instead of the regular object.</p>
                <button onClick={() => this.countUp5x()}>Count Up 5x</button>
                <button onClick={this.countDown5x}>Count Down 5x</button>

            </div>
        )
    }
}

export default CountUpAndDown;