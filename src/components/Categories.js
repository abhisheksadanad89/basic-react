import '../App.css';
import React from 'react';
import SubCategory from './SubCategory';


function Categories(params) {
    return (
        <div className="Categories-header">
            <p >Categories</p>
            <ul>
                <li><SubCategory name="Flora" /> </li>
                <li><SubCategory name="Fauna"  /></li>
                <li><SubCategory name="LandScapes"  /></li>
                <li><SubCategory name="Sea"  /></li>
            </ul>
        </div>
    )
}

export default Categories
