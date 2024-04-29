import React, { useState } from 'react';
import styles from '../../styles/search.module.scss';
export interface Movie {
    Error: string;
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface MovieSearchProps {
    apiKey: string;
    onSearchResult: (movies: Movie[]) => void;
    onError: (error: string) => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ apiKey, onSearchResult, onError }) => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string>('');

    const searchMovies = async () => {
        setError('');
        if (/[^a-zA-Z0-9\s]/.test(title)) {
            const errorMessage = 'Only alphanumeric characters are allowed';
            setError(errorMessage);
            onError(errorMessage);
            return;
        }
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search);
            onSearchResult(data.Search);
        } else {
            const errorMessage = data.Error || 'No results found';
            setError(errorMessage);
            onError(errorMessage);
        }
    };

    return (
        <div className={styles.movieContainer}>
            <input className={`${styles.movieInput} ${error && styles.movieInputError}`}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title"
            />
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button className={`${styles.movieButton} ${!title && styles.disabled}`} onClick={searchMovies}>Search</button>
        </div>
    );
};

export default MovieSearch;
