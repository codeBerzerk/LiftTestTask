'use client';

import React, { createContext, useState, useContext } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(0);

    const updateProgress = (newProgress) => {
        setProgress(newProgress);
    };

    return (
        <ProgressContext.Provider value={{ progress, updateProgress }}>
            {children}
        </ProgressContext.Provider>
    );
};
