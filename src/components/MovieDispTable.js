import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import MovieAddForm from './MovieAddForm';
import { Form, FormControl, Button } from 'react-bootstrap';

function MovieDispTable() {
  var count = 0;
  const [movies, setMovies] = useState([]);
  const [searchData, setSearch] = useState();
  const [values, setContent] = useState({
    content: false,
    searchText: ""
  });
  const addMovieDir = (movieRec) => {
    setMovies([...movies, movieRec]);
    setContent({ ...values, content: true });
  }

  const handleChange = (event) => {
    setContent({ ...values, searchText: event.target.value });
  }
  useEffect(() => {
    console.log(searchData);
  }, [searchData])

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(movies.filter((movie) => {
      return movie.movieName.includes(values.searchText);
    }))
    console.log(searchData);
  }
  if (!values.content) {
    return (<><h2>No Records</h2>
      <MovieAddForm addMovieDir={addMovieDir} /></>)
  }
  else {
    return (
      <>
        <Form inline onSubmit={handleSearch}>
          <FormControl type="text" placeholder="Search" onChange={handleChange} className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
        <Table striped bordered hover size="sm" responsive="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Movie Name</th>
              <th>Ratings</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>

            {searchData ? searchData.map((movie) => {
              count++;
              return (<tr>
                <td> {count}</td>
                <td>{movie.movieName}</td>
                <td>{movie.movieRatings}</td>
                <td>{movie.movieDuration}</td>
              </tr>)
            }) : movies.sort().reverse().map((movie) => {
              count++;
              return (<tr>
                <td> {count}</td>
                <td>{movie.movieName}</td>
                <td>{movie.movieRatings}</td>
                <td>{movie.movieDuration}</td>
              </tr>)
            })}
          </tbody>
        </Table>
        <MovieAddForm addMovieDir={addMovieDir} />
      </>
    );
  }
}

export default MovieDispTable;