import React, { Component } from 'react'

let id = 0

class FormHandling extends Component {
    state = {
        note: "",
        color: "red",
        notes: []

    }

    onChangeNote = (e) => {
        this.setState({
            note: e.target.value,
            color: this.state.color,
            notes: this.state.notes
        })
    }

    onChangeColor = (e) => {
        this.setState({
            note: this.state.note,
            color: e.target.value,
            notes: this.state.notes
        })
    }

    onSubmit = (e) => {
        const { note, color, notes } = this.state
        e.preventDefault()
        this.setState({ note: "", color: "red", notes: [...notes, { note: note, color: color }] })
    }

    render() {
        const { note, color } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Note: </label>
                    <input type="text" name="note" id="note" value={note} onChange={this.onChangeNote} />
                    <label>Color: </label>
                    <select value={color} onChange={this.onChangeColor}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </select>
                    <input type="submit" value="Submit" />

                    {this.state.notes.map(note => (
                        <div style={{ border: "solid", borderWidth: 2, borderRadius: 4, padding: 2, margin: 2 }}>
                            {note.note}, {note.color}
                        </div>
                    ))}

                </form>
            </div>
        )
    }
}

export default FormHandling;