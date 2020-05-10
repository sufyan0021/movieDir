import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MovieDispTable from './MovieDispTable';

function MovieAddForm({ addMovieDir }) {
    // Declare a new state variable, which we'll call "count"
    const [movieDetails, setMovieDetails] = useState({
        movieName: "",
        movieRatings: '',
        movieDuration: '',
    });

    const handleChange = (event) => {
        setMovieDetails({
            ...movieDetails,
            [event.target.id]: event.target.value
        });

    }
    useEffect(() => {
        //console.log('The addForm',movieDetails);
    }, [movieDetails])

    const handleSubmit = (event) => {  
        event.preventDefault();
        addMovieDir(movieDetails);
        setMovieDetails({
            movieName: "",
            movieRatings: '',
            movieDuration: '',
        });

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="movieName" >
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="input" value={movieDetails.movieName} placeholder="Enter movie name" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="movieRatings">
                    <Form.Label>Ratings</Form.Label>
                    <Form.Control type="input" value={movieDetails.movieRatings} placeholder="Ratings" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="movieDuration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="input" value={movieDetails.movieDuration} placeholder="Duration" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default MovieAddForm;