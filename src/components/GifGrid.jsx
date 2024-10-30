// import { useEffect } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    console.log(images, isLoading);

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? <h2>Loading...</h2> : null}
            <div className="card-grid">
                {images.map((img) => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    );
};
