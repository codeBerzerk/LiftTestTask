import React from 'react';
import styles from './ProgressBar.module.scss'; // Переконайтеся, що відповідний SCSS файл існує
interface ProgressBarProps {
    progress: number;
}
const ProgressBar:React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBar}
                style={{ width: `${progress}%`, background: 'linear-gradient(270deg, #4AD6BB 0%, #38A58F 100%)' }}
            />
        </div>
    );
};

export default ProgressBar;
