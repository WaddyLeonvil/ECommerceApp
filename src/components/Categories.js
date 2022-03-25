import React from 'react'
import { categories } from '../data'
import './Categories.css'
import CategoryItem from './CategoryItem'

export default function Categories() {
    return (
        <div className="cat-container">
            {categories.map((item) => (
                <CategoryItem item={item} />
            ))}
        </div>
    )
}
