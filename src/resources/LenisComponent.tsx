'use client';

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisComponent() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });
    }, []);

    return null;
}

