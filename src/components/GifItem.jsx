// import React from 'react'

export const GifItem = ({ id, title, url }) => {
    return (
        <div className="card">
            {/* <li key={id}> {title} </li>; */}
            <img
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    );
};
