import { useState } from "react";

export const AddCategories = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("Kim");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
        // console.log(target.value);
    };

    const onSumit = (e) => {
        // console.log(e.target.value);
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        console.log("inputValue", inputValue);
        // setCategories((cats) => [inputValue, ...cats]);
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={onSumit}>
            <input
                type="text"
                placeholder="Buscar gif..."
                className="form-control"
                value={inputValue}
                autoComplete="off"
                onChange={onInputChange}
            />
        </form>
    );
};
