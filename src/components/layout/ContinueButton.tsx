import React from 'react';
import styles from '../../styles/continue.module.scss';

interface ContinueButtonProps {
    onContinue: () => void;
    isContinueEnabled: boolean;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ onContinue, isContinueEnabled }) => {
    return (
        <footer className={styles.footer}>
            <button className={styles.continueButton} disabled={!isContinueEnabled} onClick={onContinue}>
                Continue
            </button>
        </footer>
    );
};

export default ContinueButton;
