import React from 'react';
import './paragraphComponent.css';

export const ParagraphComponent = (params) => {
    let { data, id, styles } = params.data;

    return (
        <div>{ data }</div>
    )
}

