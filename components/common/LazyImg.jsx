"use client";
import React, { useState } from "react";
import Image from "next/image";

const LazyImg = ({
    src,
    alt = "fieryGrillss",
    className = "",
    placeholder = "/assets/about/about-hero.jpg", // fallback on error
    onClick,
    onLoad,
    onError,
    width = 500,
    height = 300,
    layout = "responsive",
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        setError(true);
        onError?.();
    };

    return (
        <div
            className={`relative transition duration-500 ease-in-out overflow-hidden
        ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"} ${className}`}
            onClick={onClick}
        >
            <Image
                src={error ? placeholder : src}
                alt={alt}
                width={width}
                height={height}
                onLoadingComplete={handleLoad}
                onError={handleError}
                placeholder="blur"
                blurDataURL={src}
                className="w-full h-full object-cover object-center"
            />
        </div>
    );
};

export default LazyImg;
