import React, { Component } from 'react';

class AddMovie extends Component {

    constructor(props) {

        super(props)

        this.state = {
            title: 'batman',
            director: '',
            hasOscars: false,
            IMDbRating: '',
            genre: '',
            comment: ''
        }
    }



    handleChange = e => {
        let { name, value } = e.target;
        if (name === "hasOscars" && value === "on") {
            value = true;
        }
        this.setState({ [name]: value });
    }



    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addMovie(this.state)
        this.setState({
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: '',
            genre: 'Seleccionar',
            comment: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Director:</label>
                    <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Oscar Awarded:</label>
                    <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>IMDb Rating:</label>
                    <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label> Selecciona el género: </label>
                    <select name="genre" value={this.state.genre} onChange={e => this.handleChange(e)} >
                        <option value="Seleccionar">Seleccionar</option>
                        <option value="Drama">Drama</option>
                        <option value="Terror">Terror</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Fantasia">Fantasía</option>
                    </select><br></br><br></br>

                    <label> ¿Te gustó? </label>
                    <textarea name="comment" value={this.state.comment} onChange={e => this.handleChange(e)} /><br></br><br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddMovie;