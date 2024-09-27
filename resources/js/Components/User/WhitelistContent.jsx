import React from 'react';

const WhitelistContent = ({ whitelistData }) => {
    return (
        <ul>
            {whitelistData.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default WhitelistContent;
