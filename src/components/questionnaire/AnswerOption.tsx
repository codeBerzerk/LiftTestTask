import React from 'react';
import styles from '../../styles/questionnaire.module.scss';

interface AnswerOptionProps {
    genre: string;
    emoji: string;
    onChange: (genre: string) => void;
    isSelected: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({genre, emoji, onChange, isSelected}) => {
    return (
        <label className={`${styles.answerOption} ${isSelected ? styles.selected : ''}`}>
            <input
                type="radio"
                value={genre}
                checked={isSelected}
                onChange={() => onChange(genre)}
                className={styles.radioInput}
            />
            <span className={styles.emoji}>{emoji}</span>
            <span className={styles.genre}>{genre}</span>
            <span className={styles.uncheked}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <circle cx="12" cy="12.5" r="11" stroke="#212121" strokeWidth="2"/>
                </g>
            </svg>
            </span>

            {isSelected && (
                <span className={styles.checkmark}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12.5" r="12" fill="#40BCA3"/>
                            <path d="M8 12.8125L11.0711 15.8836L16.3848 10.5699" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            )}
        </label>
    );
};

export default AnswerOption;
