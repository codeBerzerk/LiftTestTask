import React, {useState} from 'react';
import styles from '@/styles/layout.module.scss';
import Header from '@/components/layout/Header';
import AnswerOption from "@/components/questionnaire/AnswerOption";
import MovieSearch, {Movie} from "@/components/search/MovieSearchInput";
import ContinueButton from "@/components/layout/ContinueButton";
import Image from "next/image";

const genres = [
    {text: 'Drama', emoji: '🎭'},
    {text: 'Comedy', emoji: '😂'},
    {text: 'Action', emoji: '🥷'},
    {text: 'Thriller', emoji: '🧟'},
    {text: 'Science fiction', emoji: '👨‍🔬'},
];

const IndexPage = () => {
    const [step, setStep] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [progress, ProgressContext] = useState(0);
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleContinue = () => {
        setStep(step + 1);
        ProgressContext(prevProgress => prevProgress + 50);
        localStorage.setItem('favoriteGenre', selectedGenre);
    };

    const handleBackClick = () => {
        setStep(step - 1);
        ProgressContext(prevProgress => prevProgress - 50);
        if (step === 1) {
            ProgressContext(0);
            setStep(1);
        }
    }
    const handleSelectGenre = (genre: React.SetStateAction<string>) => {
        setSelectedGenre(genre);
    };

    const handleSearchResult = (movies: Movie[]) => {
        setSearchResults(movies);
        setStep(step + 1);
        ProgressContext(prevProgress => prevProgress + 50);
    };

    const handleSearchError = (error: any) => {
        console.error("Search error:", error);
        setErrorMessage(error); // Зберігання повідомлення про помилку
        setStep(4);
        ProgressContext(prevProgress => prevProgress + 50);
    };

    return (
        <div className={styles.appContainer}>
            <Header progress={progress} onBackClick={handleBackClick}/>
                <div className={styles.mainContent}>
                    {step === 1 && (
                    <>
                        <h1 className={styles.mainTitle}>What your favorite movie genre?</h1>
                        {genres.map((genre) => (
                            <AnswerOption
                                key={genre.text}
                                genre={genre.text}
                                emoji={genre.emoji}
                                isSelected={selectedGenre === genre.text}
                                onChange={handleSelectGenre}
                            />
                        ))}
                        <ContinueButton isContinueEnabled={!!selectedGenre} onContinue={handleContinue}/>
                    </>
                    )}
            {step === 2 && (
                <>
                    <h1 className={styles.mainTitle}>Enter movie title</h1>
                    <MovieSearch onError={() => handleSearchError(3)} apiKey="40954e7e" onSearchResult={handleSearchResult}/>
                </>
                )}
            {step === 3 && (
                <>
                    {searchResults.length > 0 && (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: '1px solid #f0f0f0',
                            borderRadius: '8px',
                            margin: '1rem',

                        }}>
                            <img style={{
                                boxShadow: '0px 8px 17px 0px rgba(0, 0, 0, 0.05)',
                            }} src={searchResults[0].Poster} alt={searchResults[0].Title}/>
                            <h1 style={{textAlign: 'center'}}>{searchResults[0].Title}</h1>
                            <p>{searchResults[0].Year}</p>
                        </div>
                    )}
                    <button className={styles.continueButton}>Complete</button>
                </>
                )}
                    {step === 4 && (
                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <p style={{fontSize: '135px'}}>🤦‍♀️</p>
                            <h1>Oops, no movie found</h1>
                            <button className={styles.continueButton} onClick={() => setStep(2)}>Try Again</button>
                        </div>
                    )}
                </div>
        </div>
    );
};

export default IndexPage;
