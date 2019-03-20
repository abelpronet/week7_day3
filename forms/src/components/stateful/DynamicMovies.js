import React, { Component } from 'react';
import ImprovedCard from '../stateless/ImprovedCard'
import AddMovieModule from './AddMovie'
import Title from '../stateless/Title'

class DynamicMoviesList extends Component {

    constructor() {

        super()

        this.state = {
            movies: [
                { title: "Campamento Flappy", director: "Almodóvar", hasOscars: false, IMDbRating: 10, genre: 'Terror', comment: 'Menudo truño' },
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2, genre: 'Terror', comment: 'Menudo truño' },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7, genre: 'Drama', comment: 'Menuda joya' },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3, genre: 'Fantasía', comment: 'yay' }
            ],
            showOscarAwarded: false
        }
    }



    deleteMovieHandler = movieIndex => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(movieIndex, 1)
        this.setState({
            movies: moviesCopy
        })
    }


    addNewMovie = theMovie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(theMovie)
        this.setState({
            movies: moviesCopy
        })
    }



    render() {

        return (
            <div className="movies">
                {
                    this.state.movies.map((oneMovie, index) => {
                        return <ImprovedCard
                            key={index}
                            {...oneMovie}
                            clickToDelete={() => this.deleteMovieHandler(index)}
                        />
                    })
                }

                <Title text="Crear nueva película" />
                <AddMovieModule addMovie={this.addNewMovie} />

            </div>
        )
    }
}

export default DynamicMoviesList;