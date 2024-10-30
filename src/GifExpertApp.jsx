import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [Categories, setCategories] = useState(["One Punch"]);

    const onAddCategories = (newCategory) => {
        // setCategories([...Categories, "HunterXHunter"]);
        if (Categories.includes(newCategory)) return;

        console.log(newCategory);
        setCategories((cats) => [newCategory, ...cats]);
    };
    // console.log(Categories);

    return (
        <>
            {/* titulo */}
            <h2>GifExpertApp</h2>
            {/* input partk */}
            <AddCategories onNewCategory={(value) => onAddCategories(value)} />
            {/* contenido part */}
            {Categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    );
};
