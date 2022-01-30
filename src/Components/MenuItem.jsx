import React from 'react';
import '../Styles/MenuItem.scss';

const MenuItem = ({ title, imgUrl, size, subtitle = 'SHOP NOW' }) => {
    return (
        <div className={`menu-item background-mage ${size}`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imgUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    );
};

export default MenuItem;