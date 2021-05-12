import React from 'react';
import './card-list.css'

export const CardList = (props) => {
    return (
    <div>
        <h1 className='card-list'>{props.children}</h1>
    </div>
    )
}