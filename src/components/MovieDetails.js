// NPM Modules
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const [individualMovie, setIndividualMovie] = useState({})
    
    const movieID = useParams();

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}`,
            params: {
                api_key: '321a6d0985356d8f9304cc76a294aab3',
            }
        }).then((response) => {
            setIndividualMovie(response.data)
        })
    }, [movieID.movieID])

    const { title, tagline, overview, poster_path} = individualMovie
    return (
        <div className="poster">
            <div className="description">
                <h2>{title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                {
                    individualMovie ?
                        (
                            <img
                                src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={`Movie poster for ${title}`}
                            />
                        ):
                        null
                }
            </div>
        </div>
    )
}

export default MovieDetails;