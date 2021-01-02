import '../App.css';
import React from 'react';
import DisplaySelected from './DisplaySelected';

function SubCategory(params) {
    return (
        <div className="SubCategory">
            <p ><a href="#">Category - {params.name}</a> </p>

        </div>
    )
}

export default SubCategory
