"use client"

import React, { useEffect, FC } from 'react';
import { generateScssSelector } from '@/lib/utils';

const Client: FC = () => {
    useEffect(() => {
        const elt = document.querySelector("header>div.mt-4");
        let tmp = "";
        if (elt) {
            tmp = generateScssSelector(elt);
        }
        console.log(elt);
        console.log(tmp);
    }, []);

    return null;  // Retourne null si aucun rendu n'est nécessaire
};

export default Client; 