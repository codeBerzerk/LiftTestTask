import React from 'react';
import styles from '../../styles/header.module.scss';

interface HeaderProps {
    progress: number;
    onBackClick: () => void;
}

const Header: React.FC<HeaderProps> = ({progress, onBackClick}) => {
    return (
        <header className={styles.header}>
            <div className={styles.uiContainer}>
                <button className={styles.backButton} onClick={onBackClick}>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.90039 2L2.00089 7.8995L7.90039 13.799" stroke="#212121" strokeWidth="3"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className={styles.progressPercentage}>{progress}%</div>
                <span className={styles.menuButton}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="2" width="18" height="3" rx="1.5" fill="#212121"/>
                        <rect x="1" y="8" width="18" height="3" rx="1.5" fill="#212121"/>
                        <rect x="1" y="14" width="18" height="3" rx="1.5" fill="#212121"/>
                    </svg>
                </span>
            </div>
            <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{
                    width: `${progress}%`,
                }}></div>

            </div>
        </header>
    );
};

export default Header;
