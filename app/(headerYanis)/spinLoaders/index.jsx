"use client";

import React, { useState, useEffect } from "react";
import { Spinner1, Spinner2, Spinner3, Spinner4 } from "./loaderTypes";
import "./styles/base.scss";

const LOADERS = {
    1: Spinner1,
    2: Spinner2,
    3: Spinner3,
    4: Spinner4,
};

export const SpinLoaders = ({ loaderId = 1, duration = 2000 }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isLoading) return null;

    const SelectedLoader = LOADERS[loaderId] || LOADERS[1];
    return (
        <div className="spinner-container">
            <SelectedLoader />
        </div>
    );
};

export default SpinLoaders;
