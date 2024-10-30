import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImage = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImage();
        // getGifs(category).then((newImages) => setImages(newImages)); // .then(setGifs);
    }, []);

    return {
        images,
        isLoading,
    };
};
