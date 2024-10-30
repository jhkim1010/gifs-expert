export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4NmwNbFakVfH3R3UqQnFfiNR7v8DQ7eP&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));
    // console.log(`category: ${category}`);
    console.log(`gifs: ${gifs}`);
    return gifs;
}; // import React from "react";
