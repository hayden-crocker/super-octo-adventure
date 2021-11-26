/* PSEUDO CODE
* useEffect to load API 
  * - API call in UseEffect on page render 
  * - map results to display ul of images 
  * - html to display the movies onscreen
* save API data to state
* import axios
should we start with importing pieces from the react Router Library
we might need to use browserroute to go to movie detail
route to the movie page when the movie image is clicked
header with a home link to Hackflix 
* year parameter for the API! 


*** STRETCH GOALS ***
Create a function to filter the movies by year

*/
//NPM Modules
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// Componenets 
import Catalogue from './components/Catalogue';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: '321a6d0985356d8f9304cc76a294aab3',
        language: 'en-us',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 2022,
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <Router>
      <div className="wrapper">
        <header>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>HackFlix</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Catalogue movies={movies} />} />
          <Route path="movie/:movieID" element={<MovieDetails />}/>
        </Routes>


      </div>
    </Router>
  )
}

export default App;